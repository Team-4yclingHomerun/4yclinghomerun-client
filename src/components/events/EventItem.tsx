import { Link } from 'react-router-dom';

import { TEvents } from '@/types/events';

const EventItem = ({ items }: { items: TEvents }) => {
  const { bannerUrl, linkUrl } = items;

  return (
    <>
      <div className="mx-[100px] mb-4 mt-14 h-[470px]">
        <Link to={linkUrl}>
          <div
            style={{
              backgroundImage: `url(${bannerUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
            className="h-[470px] w-full"
          ></div>
        </Link>
      </div>
    </>
  );
};
export default EventItem;
