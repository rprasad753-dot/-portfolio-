import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { profile } from "../data/content";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: This is a UI-only form. Wire it to a backend or a service
    // like Formspree / EmailJS before relying on it to receive messages.
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
            Contact
          </h2>
          <p className="mt-3 text-sm text-slate/60 dark:text-paper/55 max-w-sm leading-relaxed">
            Open to entry-level Data Science and AI opportunities, internship
            extensions, and collaboration on applied ML / GenAI projects.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate/75 dark:text-paper/75">
              <MapPin size={16} className="text-teal dark:text-amber-soft shrink-0" />
              {profile.location}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-slate/75 dark:text-paper/75 hover:text-teal dark:hover:text-amber-soft transition-colors"
            >
              <Mail size={16} className="text-teal dark:text-amber-soft shrink-0" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-slate/75 dark:text-paper/75 hover:text-teal dark:hover:text-amber-soft transition-colors"
            >
              <GithubIcon size={16} className="text-teal dark:text-amber-soft shrink-0" />
              github.com/rprasad753-dot
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-slate/75 dark:text-paper/75 hover:text-teal dark:hover:text-amber-soft transition-colors"
            >
              <LinkedinIcon size={16} className="text-teal dark:text-amber-soft shrink-0" />
              LinkedIn (add your URL in content.js)
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-xs font-mono text-slate/50 dark:text-paper/45">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="mt-1.5 w-full rounded-lg border border-paper-line dark:border-ink-line bg-paper dark:bg-ink-soft px-3.5 py-2.5 text-sm text-slate dark:text-paper outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-mono text-slate/50 dark:text-paper/45">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-lg border border-paper-line dark:border-ink-line bg-paper dark:bg-ink-soft px-3.5 py-2.5 text-sm text-slate dark:text-paper outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-mono text-slate/50 dark:text-paper/45">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="mt-1.5 w-full rounded-lg border border-paper-line dark:border-ink-line bg-paper dark:bg-ink-soft px-3.5 py-2.5 text-sm text-slate dark:text-paper outline-none resize-none"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate dark:bg-amber text-paper dark:text-ink font-medium px-5 py-3 text-sm hover:opacity-90 transition-opacity"
          >
            {status === "sent" ? "Message queued" : "Send message"} <Send size={14} />
          </button>
          {status === "sent" && (
            <p className="text-xs text-slate/50 dark:text-paper/45">
              This form is UI-only for now — connect it to an email service (e.g.
              Formspree, EmailJS) to actually receive messages.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
