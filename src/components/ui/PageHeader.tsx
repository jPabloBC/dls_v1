type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#C81010]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-normal text-[#4A4F55] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-[#4A4F55] sm:text-lg">{description}</p>
    </div>
  );
}
