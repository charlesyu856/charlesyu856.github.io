import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { about } from '../data/about';
import {
  BookOpen,
  Coffee,
  Film,
  GraduationCap,
  Heart,
  Lightbulb,
  Sparkles,
  User,
} from 'lucide-react';
import type { FloatingIcon } from './ui/FloatingIcons';

const icons = [User, GraduationCap, Sparkles];

const decorations: FloatingIcon[] = [
  { Icon: BookOpen, className: 'left-[4%] top-[18%]', size: 40, delay: 0 },
  { Icon: Coffee, className: 'right-[5%] top-[12%]', size: 34, delay: 0.8 },
  { Icon: Lightbulb, className: 'left-[7%] bottom-[20%]', size: 36, delay: 1.6 },
  { Icon: Heart, className: 'right-[4%] bottom-[15%]', size: 32, delay: 2.4 },
  { Icon: Film, className: 'right-[8%] top-[45%]', size: 28, delay: 1.2 },
];

export function About() {
  return (
    <Section id="about" eyebrow="Who I Am" title="About Me" decorations={decorations}>
      <div className="grid gap-6 md:grid-cols-3">
        {about.map((card, i) => {
          const Icon = icons[i] ?? User;
          return (
            <FadeIn key={card.heading} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-accent-light/40">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-light/10 dark:text-accent-light">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  {card.heading}
                </h3>
                {card.subheading && (
                  <p className="mt-1 text-sm font-medium text-accent dark:text-accent-light">
                    {card.subheading}
                  </p>
                )}
                <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.body}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
