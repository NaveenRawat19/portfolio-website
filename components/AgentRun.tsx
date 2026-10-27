"use client";

import { useEffect, useRef, useState } from "react";
import { agentSteps } from "@/lib/content";

export default function AgentRun() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setActive((i) => {
        if (i >= agentSteps.length - 1) {
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, 1400);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const run = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setActive(0);
    setPlaying(!reduce);
  };

  const step = agentSteps[active];

  return (
    <section className="run" aria-label="Interactive example of an agent run">
      <div className="run-head">
        <p className="run-title">A typical agent run</p>
        <button type="button" className="run-btn" onClick={run}>
          {playing ? "Running…" : "Run it"}
        </button>
      </div>

      <div className="run-steps" role="tablist" aria-label="Steps">
        {agentSteps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={i === active}
            aria-controls="run-panel"
            className={`run-step ${i === active ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
            onClick={() => {
              setPlaying(false);
              setActive(i);
            }}
          >
            <span className="run-dot" aria-hidden="true" />
            {s.title}
          </button>
        ))}
      </div>

      <div id="run-panel" role="tabpanel" aria-labelledby={`tab-${step.id}`} className="run-panel">
        <p>{step.text}</p>
        <pre>{step.example}</pre>
        <p className="run-note">Illustrative example, not real output.</p>
      </div>
    </section>
  );
}
