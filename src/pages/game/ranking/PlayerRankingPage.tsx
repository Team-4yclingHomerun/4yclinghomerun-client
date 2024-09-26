import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import TopPlayerRankingFrame from '@/components/game/ranking/player/TopPlayerRankingFrame';
import PlayerRankingTableSection from '@/components/game/ranking/player/PlayerRankingTableSection';
import { ROUTER_PATH } from '@/constants/constant';

const PlayerRankingPage = () => {
  const location = useLocation();
  const { GAME_RANKING_BATTER } = ROUTER_PATH;
  const [rankingType, setRankingType] = useState<'타자' | '투수'>(
    location.pathname === GAME_RANKING_BATTER ? '타자' : '투수',
  );

  useEffect(() => {
    setRankingType(location.pathname === GAME_RANKING_BATTER ? '타자' : '투수');
  }, [location]);

  return (
    <div className="flex flex-col gap-10">
      <TopPlayerRankingFrame rankingType={rankingType} />
      <PlayerRankingTableSection rankingType={rankingType} />
    </div>
  );
};
export default PlayerRankingPage;
