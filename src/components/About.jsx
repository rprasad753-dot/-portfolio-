import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
            About
          </h2>
          <p className="mt-3 text-sm text-slate/60 dark:text-paper/55 max-w-xs">
            A Mechanical Engineer's honest first steps into Data Science.
          </p>

          <dl className="mt-8 space-y-5">
            {about.highlights.map((h) => (
              <div key={h.label} className="border-l-2 border-teal dark:border-amber pl-4">
                <dt className="font-mono text-[11px] text-slate/50 dark:text-paper/45">
                  {h.label}
                </dt>
                <dd className="font-body text-sm text-slate dark:text-paper mt-0.5">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base sm:text-lg leading-relaxed text-slate/80 dark:text-paper/80 max-w-2xl"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
