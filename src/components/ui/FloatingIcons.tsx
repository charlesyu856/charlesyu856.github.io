import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export type FloatingIcon = {
  Icon: LucideIcon;
  className: string;
  size?: number;
  delay?: number;
  duration?: number;
};

type Props = { icons: FloatingIcon[] };

export function FloatingIcons({ icons }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(({ Icon, className, size = 28, delay = 0, duration = 6 }, i) => (
        <motion.div
          key={i}
          className={`absolute text-accent/20 dark:text-accent-light/20 ${className}`}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
