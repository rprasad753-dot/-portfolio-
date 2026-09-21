import { ArrowUp } from "lucide-react";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-paper-line dark:border-ink-line py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate/50 dark:text-paper/45">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate/60 dark:text-paper/55 hover:text-teal dark:hover:text-amber-soft transition-colors"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
