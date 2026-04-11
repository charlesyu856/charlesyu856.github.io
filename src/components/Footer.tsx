export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Charles Yu. Built with React, Vite & Tailwind.
      </div>
    </footer>
  );
}
