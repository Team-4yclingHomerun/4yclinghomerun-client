const CardSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[20px] bg-gray-200 p-6 shadow-md"
          >
            <div className="mb-4 flex justify-between">
              <div className="flex h-8 w-1/2">
                <div className="h-8 w-2/5 rounded-md bg-gray-300"></div>
                <div className="ml-1 h-8 w-3/5 rounded-md bg-gray-300"></div>
              </div>
              <div className="h-6 w-1/5 rounded-md bg-gray-300"></div>
            </div>
            <div className="mb-4 h-44 w-full rounded-md bg-gray-300"></div>
            <div className="mb-1 h-10 w-1/3 rounded bg-gray-300"></div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardSkeleton;
