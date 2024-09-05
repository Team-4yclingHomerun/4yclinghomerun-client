const EventArea = ({
  children,
  title,
  isError,
  logoUrl,
}: {
  children: React.ReactNode;
  title: string;
  isError: boolean;
  logoUrl: string;
}) => {
  if (isError) {
    throw new Error('Error');
  }

  return (
    <article className="w-full table-auto align-middle">
      <div className="m-auto max-w-[1720px]">
        <section className="flex flex-row items-end justify-between"></section>
        <div className="relative inline-flex items-center overflow-hidden">
          <h2 className="text-7xl font-bold tracking-tight">{title}</h2>
          <img src={logoUrl} alt="로고" className="ml-[20px] w-[60px]" />
        </div>
        {children}
      </div>
    </article>
  );
};

export default EventArea;
