import Link from "next/link";
import { notFound } from "next/navigation";
import { isTodo, projects } from "@/lib/content";
import ArchDiagram from "@/components/ArchDiagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.name} | Naveen` : "Project" };
}

const cls = (s: string) => (isTodo(s) ? "todo" : undefined);

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <article className="case">
      <Link href="/#projects" className="text-link">All projects</Link>
      <h1>{p.name}</h1>
      <p className={`lede ${isTodo(p.tagline) ? "todo" : ""}`}>{p.tagline}</p>

      <dl className="facts">
        <dt>Role</dt>
        <dd className={cls(p.role)}>{p.role}</dd>
        <dt>Stack</dt>
        <dd>
          {p.stack.map((s) => (
            <span key={s} className={isTodo(s) ? "todo" : "tag"}>{s}</span>
          ))}
        </dd>
      </dl>

      <h2>Problem</h2>
      <p className={cls(p.problem)}>{p.problem}</p>

      <h2>What I built</h2>
      <p className={cls(p.build)}>{p.build}</p>

      <h2>Architecture</h2>
      <ArchDiagram arch={p.architecture} />

      <h2>Decisions and trade-offs</h2>
      <ul>
        {p.decisions.map((d) => (
          <li key={d} className={cls(d)}>{d}</li>
        ))}
      </ul>

      <h2>Outcome</h2>
      <p className={cls(p.outcome)}>{p.outcome}</p>

      <h2>Links</h2>
      <p className="hero-links">
        {p.links.map((l) =>
          isTodo(l.href) ? (
            <span key={l.label} className="todo">{l.label}</span>
          ) : (
            <a key={l.label} href={l.href} className="text-link">{l.label}</a>
          )
        )}
      </p>
    </article>
  );
}
