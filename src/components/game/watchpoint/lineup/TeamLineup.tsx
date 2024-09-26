import PlayerCard from './PlyaerCard';
import PitcherCard from './PitcherCard';
import { useLineupStore } from '@/stores/LineupStore';

type TeamLineupProps = {
  isHome: boolean;
};

const TeamLineup = ({ isHome }: TeamLineupProps) => {
  const {
    homeLineup,
    visitLineup,
    gameInfo,
    homePitcherInfo,
    awayPitcherInfo,
    homeTopPlayerInfo,
    awayTopPlayerInfo,
    isKtwiz,
  } = useLineupStore();

  const lineup = isHome ? homeLineup : visitLineup;
  const pitcherInfo = isHome ? homePitcherInfo : awayPitcherInfo;
  const teamName = isHome ? gameInfo.home : gameInfo.visit;
  const logoInfo = isHome ? gameInfo.homeLogo : gameInfo.visitLogo;
  const topPlayerInfo = isHome ? homeTopPlayerInfo : awayTopPlayerInfo;
  const otherTeamTopPlayerInfo = isHome ? awayTopPlayerInfo : homeTopPlayerInfo;

  // 선발 라인업이 아닌 999번 제외
  const filteredLineup = lineup.filter((player) => player.seq !== 999);
  const isTeamKtwiz = isKtwiz(isHome);

  return (
    <article className="w-full">
      <header className="mb-4 flex items-center justify-center gap-2">
        <img
          src={logoInfo}
          alt={teamName}
          className="h-12 w-12 object-contain"
        />
        <h2 className="text-xl font-bold text-white">{teamName} 선발 라인업</h2>
      </header>

      <ul className="flex flex-col gap-2">
        {filteredLineup.map((player) => (
          <li key={player.pcode}>
            <PlayerCard
              player={player}
              isKtwiz={isTeamKtwiz}
              isKeyPlayer={
                player.playerName === topPlayerInfo.name ||
                player.playerName === otherTeamTopPlayerInfo.name
              }
            />
          </li>
        ))}
      </ul>

      <PitcherCard pitcherInfo={pitcherInfo} isKtwiz={isTeamKtwiz} />
    </article>
  );
};

export default TeamLineup;
