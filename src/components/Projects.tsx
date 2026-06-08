import { useState } from 'react';
import {
  ArrowUpRight,
  Binary,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export function Projects() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const count = projects.length;

  const goTo = (next: number) => {
    const target = ((next % count) + count) % count;
    setState([target, target > index ? 1 : -1]);
  };
  const prev = () => setState(([i]) => [(i - 1 + count) % count, -1]);
  const next = () => setState(([i]) => [(i + 1) % count, 1]);

  const project = projects[index];

  return (
    <Section
      id="projects"
      eyebrow="Portfolio"
      title="Selected Projects"
      decorations={decorations}
    >
      <FadeIn>
        <div className="relative mx-auto max-w-3xl">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.div
                key={index}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80 || info.velocity.x < -500) next();
                  else if (info.offset.x > 80 || info.velocity.x > 500) prev();
                }}
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-accent/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-accent-light/50"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold leading-snug text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent dark:group-hover:text-accent-light"
                      />
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>
                    {project.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
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
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-accent/50 hover:text-accent md:-left-5 md:flex dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-accent-light/50 dark:hover:text-accent-light"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm transition hover:border-accent/50 hover:text-accent md:-right-5 md:flex dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-accent-light/50 dark:hover:text-accent-light"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-accent/50 hover:text-accent md:hidden dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-accent-light/50 dark:hover:text-accent-light"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? 'w-6 bg-accent dark:bg-accent-light'
                      : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-accent/50 hover:text-accent md:hidden dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-accent-light/50 dark:hover:text-accent-light"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
