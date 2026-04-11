import type { ReactNode } from 'react';
import { FloatingIcons, type FloatingIcon } from './FloatingIcons';

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
  decorations?: FloatingIcon[];
};

export function Section({ id, eyebrow, title, children, className = '', decorations }: Props) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      {decorations && <FloatingIcons icons={decorations} />}
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent dark:text-accent-light">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {title}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-light" />
        </div>
        {children}
      </div>
    </section>
  );
}
