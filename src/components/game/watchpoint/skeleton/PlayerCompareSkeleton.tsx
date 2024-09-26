const PlayerCompareSkeleton = () => {
  return (
    <article className="flex w-7/12 flex-col items-center">
      <header className="flex items-center gap-16">
        <figure className="flex flex-col items-center text-center">
          <div className="mb-4 h-32 w-32 rounded-full bg-gray-700"></div>
          <figcaption className="h-7 w-24 rounded bg-gray-700"></figcaption>
        </figure>
        <p className="animate-gradient bg-gradient-to-tr from-yellow-300 to-red-800 bg-clip-text text-3xl font-extrabold text-transparent">
          VS
        </p>
        <figure className="flex flex-col items-center text-center">
          <div className="mb-4 h-32 w-32 rounded-full bg-gray-700"></div>
          <figcaption className="h-7 w-24 rounded bg-gray-700"></figcaption>
        </figure>
      </header>

      <div className="mt-4 h-1 w-full rounded-full bg-kt-gray-2"></div>

      <section className="w-full">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-b border-gray-600 px-4 py-2"
          >
            <div className="flex items-center justify-end">
              <div className="h-6 w-32 rounded bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-6 w-16 rounded bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-start">
              <div className="h-6 w-32 rounded bg-gray-700"></div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default PlayerCompareSkeleton;
