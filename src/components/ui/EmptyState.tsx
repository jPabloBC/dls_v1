type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
};

export function EmptyState({ title, description, actionLabel }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-[#D6D9DC] bg-white p-8 text-center">
      <h2 className="text-lg font-semibold text-[#4A4F55]">{title}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#4A4F55]">{description}</p>
      {actionLabel ? (
        <button
          type="button"
          className="mt-5 rounded-md bg-[#C81010] px-4 py-2 text-sm font-medium text-white hover:bg-[#9A0D0D]"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
