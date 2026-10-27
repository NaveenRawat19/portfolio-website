import Link from "next/link";
import {
  education,
  experience,
  isTodo,
  profile,
  projects,
} from "@/lib/content";
import AgentRun from "@/components/AgentRun";

const cls = (s: string) => (isTodo(s) ? "todo" : undefined);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>{profile.headline}</h1>
          <p className={cls(profile.intro)}>{profile.intro}</p>
          <p className="hero-links">
            <Link href="#projects" className="button">See projects</Link>
            <a href="#contact" className="text-link">Get in touch</a>
          </p>
        </div>
        <AgentRun />
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul className="project-list">
          {projects.map((p) => (
            <li key={p.slug} className="project-row">
              <div>
                <h3>
                  <Link href={`/projects/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className={cls(p.tagline)}>{p.tagline}</p>
              </div>
              <p className="stack">
                {p.stack.map((s) => (
                  <span key={s} className={isTodo(s) ? "todo" : "tag"}>{s}</span>
                ))}
              </p>
              <Link href={`/projects/${p.slug}`} className="text-link">
                Read the write-up
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        {experience.map((e) => (
          <article key={e.org} className="job">
            <div>
              <h3>{e.role}, {e.org}</h3>
              <p className={cls(e.period)}>{e.period}</p>
            </div>
            <ul>
              {e.points.map((pt) => (
                <li key={pt} className={cls(pt)}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
        <p className="edu">{education.degree}, {education.school}</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p className={cls(profile.email)}>{profile.email}</p>
        <p className="hero-links">
          {profile.links.map((l) =>
            isTodo(l.href) ? (
              <span key={l.label} className="todo">{l.label}</span>
            ) : (
              <a key={l.label} href={l.href} className="text-link">{l.label}</a>
            )
          )}
        </p>
      </section>
    </>
  );
}
