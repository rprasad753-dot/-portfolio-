import { journey } from "../data/content";

export default function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
          Data Science Journey
        </h2>
        <p className="mt-3 text-sm text-slate/60 dark:text-paper/55 max-w-md">
          The actual sequence, in order — no step skipped or embellished.
        </p>

        <div className="mt-12 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-paper-line dark:bg-ink-line" />
          <ol className="space-y-10">
            {journey.map((stage) => (
              <li key={stage.title} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] rounded-full bg-paper dark:bg-ink border-2 border-teal dark:border-amber" />
                <p className="font-mono text-xs text-teal dark:text-amber-soft">{stage.year}</p>
                <h3 className="font-display text-lg font-semibold text-slate dark:text-paper mt-1">
                  {stage.title}
                </h3>
                <p className="text-sm text-slate/55 dark:text-paper/50 mt-0.5">{stage.org}</p>
                <p className="mt-2 text-sm text-slate/70 dark:text-paper/70 leading-relaxed max-w-xl">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
