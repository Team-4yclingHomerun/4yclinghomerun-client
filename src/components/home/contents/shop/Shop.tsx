import { randomFiveItems } from '@/mocks/home/ShopItem';

const Shop = () => {
  const shopItems = randomFiveItems;
  // 가장 큰 사이즈로 나올 메인아이템 제외
  const restItems = shopItems.slice(1);
  return (
    <>
      <div className="m-auto mt-4 max-w-[1500px]">
        {/* 추후 반응형 논의 - xl */}
        <ul className="flex justify-between gap-4 xl:gap-8">
          {/* 메인 아이템 */}
          <li
            className="relative w-1/2"
            onClick={() => (window.location.href = shopItems[0].url)}
          >
            <img
              className="h-full w-full object-cover"
              src={shopItems[0].src}
              alt={`shop item ${shopItems[0].id}`}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100">
              <h3 className="text-xl">{shopItems[0].title}</h3>
              <h4 className="text-sm">{shopItems[0].price}</h4>
            </div>
          </li>

          {/* 나머지 */}
          <li className="flex w-1/2">
            <ul className="flex w-full flex-wrap gap-4 xl:gap-8">
              {restItems.map((item) => (
                <li
                  className="relative aspect-square flex-[1_1_40%]"
                  key={item.id}
                  onClick={() => (window.location.href = item.url)}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={item.src}
                    alt={`shop item ${item.id}`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-2 opacity-0 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 xl:p-5">
                    <h3 className="xl:text-md text-sm leading-none">
                      {item.title}
                    </h3>
                    <h4 className="text-sm">{item.price}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Shop;
