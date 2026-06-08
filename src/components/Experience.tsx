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
import type { Experience as ExperienceType } from '../types';
import type { FloatingIcon } from './ui/FloatingIcons';

const decorations: FloatingIcon[] = [
  { Icon: TrendingUp, className: 'left-[3%] top-[14%]', size: 40, delay: 0 },
  { Icon: DollarSign, className: 'right-[4%] top-[20%]', size: 36, delay: 1 },
  { Icon: LineChart, className: 'left-[6%] top-[50%]', size: 34, delay: 2 },
  { Icon: Building2, className: 'right-[5%] top-[55%]', size: 38, delay: 0.6 },
  { Icon: Target, className: 'left-[4%] bottom-[18%]', size: 32, delay: 1.4 },
  { Icon: Rocket, className: 'right-[6%] bottom-[22%]', size: 36, delay: 2.2 },
];

const items = [...experience].sort((a, b) => a.start.localeCompare(b.start));

const fmt = (d: string) =>
  d === 'Present'
    ? 'Present'
    : new Date(`${d}-01`).toLocaleString('en-US', { month: 'short', year: 'numeric' });

const rangeOf = (exp: ExperienceType) => `${fmt(exp.start)} – ${fmt(exp.end)}`;

function TimelineCard({ exp }: { exp: ExperienceType }) {
  return (
    <div className="flex w-80 shrink-0 flex-col">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent dark:bg-accent-light/10 dark:text-accent-light">
          {rangeOf(exp)}
        </span>
        <h3 className="mt-3 font-display text-xl font-bold text-accent dark:text-accent-light">
          {exp.company}
        </h3>
        <p className="mt-0.5 text-sm font-medium italic text-slate-500 dark:text-slate-400">
          {exp.role}
        </p>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{exp.summary}</p>
        <ul className="mt-4 space-y-2">
          {exp.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* connector + node on the axis */}
      <div className="relative mt-4 flex flex-col items-center">
        <div className="h-6 w-px bg-gradient-to-b from-accent to-accent-light" />
        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-white text-accent shadow-md dark:bg-slate-950 dark:text-accent-light">
          <Briefcase size={14} />
        </div>
        <span className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          {rangeOf(exp)}
        </span>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career"
      title="Professional Experience"
      decorations={decorations}
    >
      <FadeIn>
        <div className="group relative overflow-hidden py-2">
          {/* horizontal time axis running through the connector nodes */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[3.25rem] h-px bg-gradient-to-r from-transparent via-accent-light to-transparent dark:via-accent-light/60" />

          {/* edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />

          <div className="flex w-max animate-marquee items-end gap-8 group-hover:[animation-play-state:paused]">
            {[...items, ...items].map((exp, i) => (
              <div key={`${exp.company}-${i}`} aria-hidden={i >= items.length}>
                <TimelineCard exp={exp} />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
