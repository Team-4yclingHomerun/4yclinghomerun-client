import { Link } from 'react-router-dom';

import { TEvents } from '@/types/events';

const EventItem = ({ items }: { items: TEvents }) => {
  const { bannerUrl, linkUrl } = items;

  return (
    <>
      <div className="mx-[100px] mb-4 mt-8">
        <Link to={linkUrl}>
          <div
            style={{
              backgroundImage: `url(${bannerUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
            }}
            className="grid h-[40vh] w-full grid-rows-1"
          ></div>
        </Link>
      </div>
    </>
  );
};
export default EventItem;
