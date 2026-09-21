import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { projects, projectCategories } from "../data/content";

function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-paper-line dark:border-ink-line p-6 flex flex-col h-full bg-paper-soft/30 dark:bg-ink-soft/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-slate dark:text-paper">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-[10px] px-2 py-1 rounded-md bg-teal/10 text-teal dark:bg-amber/10 dark:text-amber-soft whitespace-nowrap">
          {project.category}
        </span>
      </div>

      {project.dataset && (
        <p className="text-xs text-slate/50 dark:text-paper/45 mt-1.5">
          Dataset: {project.dataset}
        </p>
      )}

      <p className="mt-3 text-sm text-slate/75 dark:text-paper/75 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <p className="font-mono text-[11px] text-slate/45 dark:text-paper/40 mb-1">Problem</p>
          <p className="text-sm text-slate/70 dark:text-paper/70 leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] text-slate/45 dark:text-paper/40 mb-1">Solution</p>
          <p className="text-sm text-slate/70 dark:text-paper/70 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {project.workflow && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.workflow.map((step, i) => (
            <span key={step} className="flex items-center gap-1.5">
              <span className="text-[11px] font-mono px-2 py-1 rounded bg-paper dark:bg-ink border border-paper-line dark:border-ink-line text-slate/70 dark:text-paper/70">
                {step}
              </span>
              {i < project.workflow.length - 1 && (
                <span className="text-slate/30 dark:text-paper/25 text-xs">→</span>
              )}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4">
        <p className="font-mono text-[11px] text-slate/45 dark:text-paper/40 mb-1.5">
          Key features
        </p>
        <ul className="space-y-1.5">
          {project.features.map((f) => (
            <li
              key={f}
              className="text-sm text-slate/70 dark:text-paper/70 leading-snug pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-slate/30 dark:before:text-paper/30"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>

      {project.models && (
        <div className="mt-4">
          <p className="font-mono text-[11px] text-slate/45 dark:text-paper/40 mb-1.5">
            Models explored
          </p>
          <p className="text-sm text-slate/70 dark:text-paper/70">{project.models.join(", ")}</p>
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-body px-2 py-1 rounded-md border border-paper-line dark:border-ink-line text-slate/60 dark:text-paper/60"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-paper-line dark:border-ink-line flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate dark:text-paper hover:text-teal dark:hover:text-amber-soft transition-colors"
        >
          <GithubIcon size={15} /> GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate dark:text-paper hover:text-teal dark:hover:text-amber-soft transition-colors"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
              Featured Projects
            </h2>
            <p className="mt-3 text-sm text-slate/60 dark:text-paper/55 max-w-md">
              Real repositories, real problems — no invented metrics.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-medium px-3.5 py-2 rounded-full border transition-colors ${
                  active === cat
                    ? "bg-slate dark:bg-amber text-paper dark:text-ink border-slate dark:border-amber"
                    : "border-paper-line dark:border-ink-line text-slate/70 dark:text-paper/70 hover:border-teal dark:hover:border-amber"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
