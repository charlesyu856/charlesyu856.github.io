import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bk-bridge.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-950/95 dark:from-slate-950/80 dark:via-slate-950/80 dark:to-slate-950" />

      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-blob" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 text-white md:order-1"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for opportunities
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-accent-light via-indigo-300 to-white bg-clip-text text-transparent">Charles</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-200 md:text-xl">
            Data Scientist &middot; Software Developer
            <br />
            <span className="text-slate-300">Learning is a life-long commitment.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-dark"
            >
              View My Work
              <ArrowDown className="transition group-hover:translate-y-0.5" size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-white/80">
            <a href="https://github.com/charlesyu856" target="_blank" rel="noopener noreferrer" className="transition hover:text-white"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/cy1203" target="_blank" rel="noopener noreferrer" className="transition hover:text-white"><Linkedin size={20} /></a>
            <a href="mailto:charles.yu.1203@gmail.com" className="transition hover:text-white"><Mail size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent via-indigo-400 to-purple-400 opacity-60 blur-2xl" />
            <img
              src="/images/photo.jpg"
              alt="Charles Yu"
              className="relative h-64 w-64 rounded-full border-4 border-white/20 object-cover shadow-2xl md:h-80 md:w-80"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.a>
    </section>
  );
}
