import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { profile } from "../data/content";

export default function GithubSection() {
  return (
    <section id="github" className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-2xl border border-paper-line dark:border-ink-line p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-teal/10 dark:bg-amber/10 text-teal dark:text-amber-soft">
              <GithubIcon size={22} />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-slate dark:text-paper">
                See the code
              </h2>
              <p className="mt-2 text-sm text-slate/65 dark:text-paper/60 max-w-md leading-relaxed">
                Every project above links back to its repository. My GitHub is where the
                actual notebooks, source files, and commit history live — no repo is
                represented that doesn't exist.
              </p>
            </div>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate dark:bg-amber text-paper dark:text-ink font-medium px-5 py-3 text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Visit GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
