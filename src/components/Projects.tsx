import {
  ArrowUpRight,
  Binary,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { projects } from '../data/projects';
import type { FloatingIcon } from './ui/FloatingIcons';

const decorations: FloatingIcon[] = [
  { Icon: Code2, className: 'left-[3%] top-[12%]', size: 42, delay: 0 },
  { Icon: BrainCircuit, className: 'right-[4%] top-[16%]', size: 40, delay: 1 },
  { Icon: Database, className: 'left-[5%] top-[48%]', size: 36, delay: 2 },
  { Icon: Terminal, className: 'right-[5%] top-[52%]', size: 34, delay: 0.8 },
  { Icon: GitBranch, className: 'left-[4%] bottom-[16%]', size: 32, delay: 1.6 },
  { Icon: Cpu, className: 'right-[6%] bottom-[20%]', size: 38, delay: 2.4 },
  { Icon: Binary, className: 'left-[7%] top-[30%]', size: 28, delay: 1.2 },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Selected Projects"
      decorations={decorations}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={(i % 3) * 0.1}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-accent-light/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold leading-snug text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:group-hover:text-accent-light"
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>
                {p.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent dark:bg-accent-light/10 dark:text-accent-light"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
