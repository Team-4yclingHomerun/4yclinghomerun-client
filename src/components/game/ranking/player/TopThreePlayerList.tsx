import { TPlayerRankingTopThree } from '@/types/PlayerRanking';

const TopThreePlayerList = ({
  title,
  listInfo,
}: {
  title: string;
  listInfo: TPlayerRankingTopThree[];
}) => {
  return (
    <section className="flex flex-col items-start justify-center text-kt-white">
      <h1 className="mb-2 text-lg font-bold">{title} TOP3</h1>
      <ul>
        {listInfo.map((item) => (
          <li key={item.rank}>
            {item.rank}. {item.playerName} ({item.era}
            {item.hr}
            {item.hra}
            {item.w})
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TopThreePlayerList;
