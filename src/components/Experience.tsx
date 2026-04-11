import {
  Briefcase,
  Building2,
  DollarSign,
  LineChart,
  Rocket,
  Target,
  TrendingUp,
} from 'lucide-react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { experience } from '../data/experience';
import type { FloatingIcon } from './ui/FloatingIcons';

const decorations: FloatingIcon[] = [
  { Icon: TrendingUp, className: 'left-[3%] top-[14%]', size: 40, delay: 0 },
  { Icon: DollarSign, className: 'right-[4%] top-[20%]', size: 36, delay: 1 },
  { Icon: LineChart, className: 'left-[6%] top-[50%]', size: 34, delay: 2 },
  { Icon: Building2, className: 'right-[5%] top-[55%]', size: 38, delay: 0.6 },
  { Icon: Target, className: 'left-[4%] bottom-[18%]', size: 32, delay: 1.4 },
  { Icon: Rocket, className: 'right-[6%] bottom-[22%]', size: 36, delay: 2.2 },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Professional Experience"
      decorations={decorations}
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-light to-transparent md:left-1/2" />

        <div className="space-y-10">
          {experience.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.08}>
              <div className="relative pl-12 md:pl-0">
                <div className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-white text-accent shadow-md md:left-1/2 md:-translate-x-1/2 dark:bg-slate-950 dark:text-accent-light">
                  <Briefcase size={14} />
                </div>

                <div
                  className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:w-[calc(50%-2rem)] dark:border-slate-800 dark:bg-slate-900/50 ${
                    i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <h3 className="font-display text-xl font-bold text-accent dark:text-accent-light">
                    {exp.company}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium italic text-slate-500 dark:text-slate-400">
                    {exp.role}
                  </p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300">{exp.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
