import { Link } from 'react-router-dom';

import { TEventTest } from '@/types/events';

const EventItem = ({ items }: { items: TEventTest }) => {
  return (
    <>
      <div className="h-[520px] hover:text-kt-red-3">
        <Link to={`/events/${items.id}`}>
          <div
            style={{
              backgroundImage: `url(${items.url})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="relative h-[520px] w-full"
          ></div>
        </Link>
      </div>
    </>
  );
};
export default EventItem;
