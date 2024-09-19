import { GetPostSeasonPossibility } from '@/api/GetPostSeasonPossibility';
import { GetTeamRank } from '@/api/GetTeamRank';

const TeamRank = () => {
  const { data, isLoading, isError, error } = GetTeamRank();
  const { ktPostSeasonPossibility, isLoading: ktPossibilityLoading } =
    GetPostSeasonPossibility();
  const teamRankData = data.data.ktWizTeamRank;
  const { game, rank, wra, wldName } = teamRankData;
  const formmattedWra = Number(wra) * 100;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error}</p>;

  return (
    <section className="relative w-full overflow-hidden rounded-lg bg-gray-100 bg-gradient-to-br from-[#35383E] to-[#241f1f] p-1">
      <article className="flex h-36 items-stretch rounded-lg bg-gradient-to-r from-gray-800 to-black text-white">
        <header className="flex w-auto flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[#111111] p-6 text-white">
          <h1 className="text-lg">현재 순위</h1>
          <p className="text-7xl font-bold">
            <span className="animate-gradient bg-gradient-to-tr from-yellow-500 via-cyan-600 to-lime-200 bg-clip-text text-transparent">
              {rank}
            </span>
            <span className="text-xl">위</span>
          </p>
        </header>

        <main className="flex flex-grow items-center justify-between px-6">
          <div className="flex items-center space-x-8">
            <section className="flex items-center">
              <div>
                <h2 className="text-base font-medium text-gray-300">
                  현재 기록 (현재 {game}경기 중)
                </h2>
                <p className="text-2xl font-bold">{wldName}</p>
              </div>
            </section>

            <section className="flex items-center">
              <div>
                <h3 className="text-base font-medium text-gray-300">승률</h3>
                <p className="text-2xl font-bold">{formmattedWra}%</p>
              </div>
            </section>

            <section className="flex items-center">
              <div>
                <h3 className="text-base font-medium text-gray-300">
                  PS 진출 확률
                </h3>
                {ktPossibilityLoading ? (
                  <p className="break-keep text-base font-bold">
                    KT AI가 분석중...
                  </p>
                ) : (
                  <p className="text-2xl font-bold">
                    {ktPostSeasonPossibility}
                  </p>
                )}
              </div>
            </section>
          </div>
        </main>
      </article>
    </section>
  );
};

export default TeamRank;
