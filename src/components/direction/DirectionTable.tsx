import { DirectionData } from '@/data/DirectionData';

const DirectionTable = () => {
  return (
    <section className="mt-12 flex w-full gap-3">
      {DirectionData.map((item) => (
        <div key={item.title} className="w-full">
          <div
            className="flex w-full items-center border-b-2 border-kt-gray-2 px-2 py-4"
            key={item.title}
          >
            <h1 className="flex w-1/3 items-center gap-3 text-3xl font-bold text-kt-white">
              <div>{item.icon}</div>
              <div className="min-w-full">{item.title}</div>
            </h1>
          </div>
          <ul className="mt-4 space-y-2">
            {item.content.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
export default DirectionTable;
