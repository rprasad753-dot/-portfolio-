import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import { profile } from "../data/content";

const PIPELINE = [
  { label: "Mechanical Engineering", note: "2013 – 2017" },
  { label: "AI & ML Training", note: "2025" },
  { label: "Data Science Internship", note: "2026" },
  { label: "Applied Projects", note: "Ongoing" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 blueprint-grid opacity-[0.4] dark:opacity-100 pointer-events-none"
        style={{ "--grid-line": "rgba(28,37,49,0.05)" }}
      />
      <div className="hidden dark:block absolute inset-0 blueprint-grid pointer-events-none" style={{ "--grid-line": "rgba(232,163,61,0.06)" }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 sm:px-8"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs tracking-wide text-teal dark:text-amber-soft mb-5"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-6xl leading-[1.05] font-semibold text-slate dark:text-paper max-w-3xl"
        >
          {profile.headline}
          <br />
          <span className="text-teal dark:text-amber">{profile.subhead}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base sm:text-lg text-slate/75 dark:text-paper/75 leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate dark:bg-amber text-paper dark:text-ink font-medium px-5 py-3 text-sm hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowUpRight size={15} />
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-slate/30 dark:border-paper/25 text-slate dark:text-paper font-medium px-5 py-3 text-sm hover:border-teal dark:hover:border-amber transition-colors"
          >
            Download Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate/30 dark:border-paper/25 text-slate dark:text-paper font-medium px-5 py-3 text-sm hover:border-teal dark:hover:border-amber transition-colors"
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate/30 dark:border-paper/25 text-slate dark:text-paper font-medium px-5 py-3 text-sm hover:border-teal dark:hover:border-amber transition-colors"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate/30 dark:border-paper/25 text-slate dark:text-paper font-medium px-5 py-3 text-sm hover:border-teal dark:hover:border-amber transition-colors"
          >
            <Mail size={15} /> Contact
          </a>
        </motion.div>

        {/* Pipeline diagram — the literal shape of the career transition */}
        <motion.div
          variants={item}
          className="mt-16 sm:mt-20 border-t border-paper-line dark:border-ink-line pt-8"
        >
          <p className="font-mono text-xs text-slate/50 dark:text-paper/45 mb-5">
            career_pipeline.trace()
          </p>
          <div className="flex flex-col sm:flex-row sm:items-stretch gap-0">
            {PIPELINE.map((stage, i) => (
              <div key={stage.label} className="flex sm:flex-1 items-stretch">
                <div className="flex-1 rounded-xl border border-paper-line dark:border-ink-line bg-paper-soft/60 dark:bg-ink-soft/60 px-4 py-4">
                  <p className="font-mono text-[11px] text-teal dark:text-amber-soft mb-1">
                    {stage.note}
                  </p>
                  <p className="font-display text-sm font-medium text-slate dark:text-paper">
                    {stage.label}
                  </p>
                </div>
                {i < PIPELINE.length - 1 && (
                  <div className="hidden sm:flex items-center px-2 text-slate/30 dark:text-paper/25">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
