import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
          Experience
        </h2>
        <p className="mt-3 text-sm text-slate/60 dark:text-paper/55 max-w-md">
          Internship experience — presented as learning-in-practice, not a senior track record.
        </p>

        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <div
              key={job.org}
              className="rounded-xl border border-paper-line dark:border-ink-line p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate dark:text-paper">
                    {job.role}
                  </h3>
                  <p className="text-sm text-slate/60 dark:text-paper/60 mt-0.5">
                    {job.org} · {job.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block font-mono text-[11px] px-2.5 py-1 rounded-md bg-teal/10 text-teal dark:bg-amber/10 dark:text-amber-soft">
                    {job.type}
                  </span>
                  <p className="text-xs text-slate/50 dark:text-paper/45 mt-1.5">
                    {job.period}
                  </p>
                </div>
              </div>

              <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-slate/75 dark:text-paper/75 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-teal dark:before:bg-amber"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
