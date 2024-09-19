import { Link } from 'react-router-dom';

const NewsArea = ({
  children,
  title,
  isError,
  logoUrl,
  link,
}: {
  children: React.ReactNode;
  title: string;
  isError: boolean;
  logoUrl: string;
  link: string;
}) => {
  if (isError) {
    throw new Error('Error');
  }

  return (
    <article className="w-full table-auto align-middle">
      <div className="m-auto max-w-[1720px]">
        <section className="flex flex-row items-end justify-between">
          <div className="relative inline-flex items-center overflow-hidden">
            <h2 className="text-7xl font-bold tracking-tight">{title}</h2>
            <img src={logoUrl} alt="로고" className="ml-[20px] w-[60px]" />
          </div>
          <button className="inline-flex h-14 w-36 items-center justify-center border border-black text-center font-bold hover:bg-black hover:text-white">
            <span>
              <Link to={link}>더보기</Link>
            </span>
          </button>
        </section>
        <ul className="mt-14 flex flex-row justify-between">{children}</ul>
      </div>
    </article>
  );
};

export default NewsArea;
