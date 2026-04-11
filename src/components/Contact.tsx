import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AtSign,
  Calendar,
  CheckCircle2,
  Github,
  Globe,
  Linkedin,
  Loader2,
  Mail,
  MessageCircle,
  Send,
  Sparkle,
  XCircle,
} from 'lucide-react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/FadeIn';
import { calendlyUrl, formspreeEndpoint } from '../data/socials';
import type { FloatingIcon } from './ui/FloatingIcons';

const decorations: FloatingIcon[] = [
  { Icon: MessageCircle, className: 'left-[4%] top-[15%]', size: 40, delay: 0 },
  { Icon: AtSign, className: 'right-[5%] top-[18%]', size: 36, delay: 1 },
  { Icon: Send, className: 'left-[6%] top-[50%]', size: 34, delay: 2 },
  { Icon: Globe, className: 'right-[4%] top-[55%]', size: 38, delay: 0.8 },
  { Icon: Sparkle, className: 'left-[5%] bottom-[18%]', size: 30, delay: 1.6 },
];

type FormValues = { name: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (data: FormValues) => {
    setStatus('sending');
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputCls =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:placeholder:text-slate-500';

  return (
    <Section id="contact" eyebrow="Say Hi" title="Let's Connect" decorations={decorations}>
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <FadeIn>
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I'm always open to interesting conversations, collaborations, and opportunities.
                Drop me a message or book a quick call.
              </p>
              <div className="mt-8 space-y-3">
                <a href="mailto:charles.yu.1203@gmail.com" className="flex items-center gap-3 text-slate-700 transition hover:text-accent dark:text-slate-300 dark:hover:text-accent-light">
                  <Mail size={18} /> charles.yu.1203@gmail.com
                </a>
                <a href="https://github.com/charles001203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 transition hover:text-accent dark:text-slate-300 dark:hover:text-accent-light">
                  <Github size={18} /> github.com/charles001203
                </a>
                <a href="https://www.linkedin.com/in/cy1203" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-700 transition hover:text-accent dark:text-slate-300 dark:hover:text-accent-light">
                  <Linkedin size={18} /> linkedin.com/in/cy1203
                </a>
              </div>
            </div>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white dark:border-accent-light dark:text-accent-light dark:hover:bg-accent-light dark:hover:text-slate-900"
            >
              <Calendar size={16} /> Book a 30-min chat
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50"
          >
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className={inputCls}
                  {...register('name', { required: true })}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">Name is required</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className={inputCls}
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">Valid email required</p>}
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your message"
                  className={inputCls}
                  {...register('message', { required: true })}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">Message is required</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-dark disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center justify-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={16} /> Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center justify-center gap-2 text-sm text-red-500">
                  <XCircle size={16} /> Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}
