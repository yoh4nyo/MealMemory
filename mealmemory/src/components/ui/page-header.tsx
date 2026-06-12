type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <section className="flex flex-col gap-4 rounded-[1.5rem] border border-[#e4e2e1] bg-white/82 p-5 shadow-[0_10px_35px_rgba(51,51,51,0.05)] sm:p-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-sm font-bold text-[#3d6751] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-heading mt-2 text-3xl font-bold text-[#1b1c1c] sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#717973]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </section>
  );
}
