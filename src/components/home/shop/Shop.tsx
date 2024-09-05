const Shop = () => {
  const mainItem = {
    src: 'https://images.pexels.com/photos/1480965/pexels-photo-1480965.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Item 1',
    price: '$ price',
  };

  const items = [
    {
      src: 'https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Item 2',
      price: 'price',
    },
    {
      src: 'https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Item 3',
      price: 'price',
    },
    {
      src: 'https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Item 4',
      price: 'price',
    },
    {
      src: 'https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Item 5',
      price: 'price',
    },
  ];

  return (
    <>
      <div className="h-screen w-full bg-black px-48 py-16 text-white">
        <div className="mb-10 flex justify-between">
          <h2 className="text-4xl">Shop</h2>
          <button className="w-32 border py-3">더보기</button>
        </div>
        <div className="m-auto max-w-[1280px]">
          <ul className="flex justify-between gap-6">
            {/* 메인 아이템 */}
            <li className="relative w-2/5">
              <img
                className="h-full object-cover"
                src={mainItem.src}
                alt="shop item"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity hover:cursor-pointer hover:opacity-100">
                <h3 className="text-2xl">{mainItem.title}</h3>
                <h4 className="text-md">{mainItem.price}</h4>
              </div>
            </li>

            {/* 나머지 */}
            <li className="flex w-3/5">
              <ul className="flex w-full flex-wrap gap-6">
                {items.map((item, index) => (
                  <li
                    className="relative aspect-square flex-[1_1_40%]"
                    key={index}
                  >
                    <img
                      className="h-full object-cover"
                      src={item.src}
                      alt={`shop item ${index + 2}`}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity hover:cursor-pointer hover:opacity-100">
                      <h3 className="text-2xl">{item.title}</h3>
                      <h4 className="text-md">{item.price}</h4>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Shop;
