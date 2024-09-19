type TeamRankProps = {
  rank: number;
  wins: number;
  losses: number;
  ties: number;
  psRate: number;
};

const TeamRank = ({ rank, wins, losses, ties, psRate }: TeamRankProps) => {
  const winningPercentage = ((wins / (wins + losses + ties)) * 100).toFixed(1);
  const totalGames = wins + losses + ties;

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
          <div className="flex items-center space-x-12">
            <section className="flex items-center">
              <div>
                <h2 className="text-lg font-medium text-gray-300">
                  현재 기록 (현재 {totalGames}경기 중)
                </h2>
                <p className="text-2xl font-bold">
                  {wins}승 {losses}패 {ties}무
                </p>
              </div>
            </section>

            <section className="flex items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-300">승률</h3>
                <p className="text-2xl font-bold">{winningPercentage}%</p>
              </div>
            </section>

            <section className="flex items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-300">
                  PS 진출 확률
                </h3>
                <p className="text-2xl font-bold">{psRate}%</p>
              </div>
            </section>
          </div>
        </main>
      </article>
    </section>
  );
};

export default TeamRank;
