const EventArea = ({
  children,
  isError,
}: {
  children: React.ReactNode;
  isError: boolean;
}) => {
  if (isError) {
    throw new Error('Error');
  }

  return (
    <article className="w-full table-auto align-middle">
      <div className="m-auto max-w-[1720px]">{children}</div>
    </article>
  );
};

export default EventArea;
