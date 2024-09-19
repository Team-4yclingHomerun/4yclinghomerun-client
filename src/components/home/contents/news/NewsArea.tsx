const NewsArea = ({
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
      <div className="m-auto max-w-[1720px]">
        <ul className="mx-[-12px] mt-14 flex flex-row justify-between">
          {children}
        </ul>
      </div>
    </article>
  );
};

export default NewsArea;
