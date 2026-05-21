type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "No hay elementos",
  description = "No hay información disponible.",
}: EmptyStateProps) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-16
        text-center
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          text-gray-700
        "
      >
        {title}
      </h2>

      <p
        className="
          text-gray-500
          mt-2
        "
      >
        {description}
      </p>

    </div>
  );
}