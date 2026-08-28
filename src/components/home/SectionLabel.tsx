type Props = {
  number: string;
  title: string;
};

export function SectionLabel({ number, title }: Props) {
  return (
    <div className="flex items-center">
      <span className="border border-main-700/35 px-3 py-2 font-mono text-sm leading-none text-main-700 dark:border-main-300/35 dark:text-main-300">
        {number}
      </span>
      <span className="bg-main-700 px-3.5 py-2 font-heading text-base uppercase leading-none tracking-wide text-white sm:text-lg dark:bg-main-400 dark:text-main-900">
        {title}
      </span>
      <span className="ml-4 h-px flex-1 bg-border" />
      <span className="ml-3 size-1.5 shrink-0 bg-accent-500" aria-hidden />
    </div>
  );
}
