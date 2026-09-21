import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/90 dark:bg-ink/90 backdrop-blur-md border-b border-paper-line dark:border-ink-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-slate dark:text-paper"
        >
          Rahul Prasad
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate/70 dark:text-paper/70 hover:text-teal dark:hover:text-amber-soft transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border border-paper-line dark:border-ink-line text-slate dark:text-paper hover:border-teal dark:hover:border-amber transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-slate dark:bg-amber text-paper dark:text-ink text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border border-paper-line dark:border-ink-line text-slate dark:text-paper"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-full border border-paper-line dark:border-ink-line text-slate dark:text-paper"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-paper dark:bg-ink border-b border-paper-line dark:border-ink-line px-5 pb-5">
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-slate dark:text-paper text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.resumeFile}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate dark:bg-amber text-paper dark:text-ink text-sm font-medium px-4 py-2.5"
              >
                Download Resume <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
