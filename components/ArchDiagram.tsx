"use client";

import { useState } from "react";
import type { Architecture } from "@/lib/content";

const W = 150;
const H = 52;
const GX = 70;
const GY = 34;

export default function ArchDiagram({ arch }: { arch: Architecture }) {
  const [selected, setSelected] = useState(arch.nodes[0]?.id);
  const maxCol = Math.max(...arch.nodes.map((n) => n.col));
  const maxRow = Math.max(...arch.nodes.map((n) => n.row));
  const width = (maxCol + 1) * W + maxCol * GX;
  const height = (maxRow + 1) * H + maxRow * GY;

  const pos = (id: string) => {
    const n = arch.nodes.find((x) => x.id === id)!;
    return { x: n.col * (W + GX), y: n.row * (H + GY) };
  };

  const current = arch.nodes.find((n) => n.id === selected);
  const connected = (id: string) =>
    arch.edges.some(([a, b]) => (a === selected && b === id) || (b === selected && a === id));

  return (
    <figure className="arch">
      <div className="arch-scroll">
        <svg
          viewBox={`-4 -4 ${width + 8} ${height + 8}`}
          style={{ minWidth: Math.min(width, 640) }}
          role="group"
          aria-label="Architecture diagram"
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
            </marker>
          </defs>

          {arch.edges.map(([a, b]) => {
            const from = pos(a);
            const to = pos(b);
            const sameRow = from.y === to.y;
            const x1 = from.x + W;
            const y1 = from.y + H / 2;
            const x2 = sameRow ? to.x : to.x + W / 2;
            const y2 = sameRow ? to.y + H / 2 : to.y;
            const d = sameRow
              ? `M${x1} ${y1} L${x2 - 2} ${y2}`
              : `M${from.x + W / 2} ${from.y + H} L${x2} ${y2 - 2}`;
            const on = a === selected || b === selected;
            return (
              <path
                key={`${a}-${b}`}
                d={d}
                className={`arch-edge ${on ? "is-on" : ""}`}
                markerEnd="url(#arrow)"
                fill="none"
              />
            );
          })}

          {arch.nodes.map((n) => {
            const { x, y } = pos(n.id);
            const isSel = n.id === selected;
            return (
              <g
                key={n.id}
                transform={`translate(${x} ${y})`}
                tabIndex={0}
                role="button"
                aria-pressed={isSel}
                aria-label={`${n.label}: ${n.note}`}
                className={`arch-node ${isSel ? "is-sel" : ""} ${connected(n.id) ? "is-linked" : ""} ${n.placeholder ? "is-ph" : ""}`}
                onClick={() => setSelected(n.id)}
                onFocus={() => setSelected(n.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(n.id);
                  }
                }}
              >
                <rect width={W} height={H} rx={4} />
                <text x={W / 2} y={H / 2 + 5} textAnchor="middle">{n.label}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {current && (
        <figcaption className="arch-caption" aria-live="polite">
          <strong>{current.label}.</strong>{" "}
          <span className={current.note.startsWith("TODO") ? "todo" : undefined}>{current.note}</span>
        </figcaption>
      )}
      {arch.nodes.some((n) => n.placeholder) && (
        <p className="arch-ph">Dashed boxes are placeholders. Replace them with the real architecture.</p>
      )}
    </figure>
  );
}
