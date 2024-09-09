import { Link } from 'react-router-dom';

import { TNews } from '@/types/news';

const NewsItem = ({ items }: { items: TNews }) => {
  return (
    <>
      <li className="w-[400px] list-none hover:text-kt-red-3">
        <Link to={items.linkUrl}>
          <div
            style={{
              backgroundImage: `url(${items.thumbnailUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="relative h-[520px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-65 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button className="relative z-10 rounded-full bg-kt-red-3 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-kt-red-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-kt-red-3 focus:ring-offset-2">
                기사보기
              </button>
            </div>
          </div>
          <h4 className="mb-1 mt-2.5 truncate text-xl font-semibold">
            {items.title}
          </h4>
          <p className="text-lg text-kt-gray-2">{items.date}</p>
        </Link>
      </li>
    </>
  );
};
export default NewsItem;
