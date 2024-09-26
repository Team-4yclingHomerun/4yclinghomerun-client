const CardArea = ({
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
    <article>
      <ul
        className={`relative m-auto grid h-full max-w-[1440px] gap-x-[2vw] gap-y-[50px] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4`}
      >
        {children}
      </ul>
    </article>
  );
};
export default CardArea;
