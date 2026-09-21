import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../data/content";

export default function EducationCerts() {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 border-t border-paper-line dark:border-ink-line"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid sm:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
            Education
          </h2>
          <div className="mt-8 space-y-6">
            {education.map((ed) => (
              <div key={ed.degree} className="flex gap-4">
                <GraduationCap className="shrink-0 text-teal dark:text-amber-soft mt-1" size={20} />
                <div>
                  <h3 className="font-display text-base font-semibold text-slate dark:text-paper">
                    {ed.degree}
                  </h3>
                  <p className="text-sm text-slate/60 dark:text-paper/55 mt-0.5">{ed.school}</p>
                  <p className="text-xs text-slate/45 dark:text-paper/40 mt-1">{ed.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 id="certifications" className="font-display text-2xl sm:text-3xl font-semibold text-slate dark:text-paper">
            Certifications / Training
          </h2>
          <div className="mt-8 space-y-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex gap-4">
                <Award className="shrink-0 text-teal dark:text-amber-soft mt-1" size={20} />
                <div>
                  <h3 className="font-display text-base font-semibold text-slate dark:text-paper">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate/60 dark:text-paper/55 mt-0.5">{cert.org}</p>
                  <p className="text-xs text-slate/45 dark:text-paper/40 mt-1">{cert.period}</p>
                  {cert.note && (
                    <p className="text-xs italic text-slate/40 dark:text-paper/35 mt-1.5">
                      {cert.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
