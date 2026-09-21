import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
          Skills
        </h2>
        <p className="mt-3 text-sm text-slate/60 dark:text-paper/55 max-w-md">
          Grouped by how they're actually used in my projects, not a stack ranking.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-paper-line dark:border-ink-line p-5 bg-paper-soft/40 dark:bg-ink-soft/40"
            >
              <h3 className="font-display text-sm font-semibold text-teal dark:text-amber-soft mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-body px-2.5 py-1 rounded-md bg-paper dark:bg-ink border border-paper-line dark:border-ink-line text-slate/80 dark:text-paper/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
