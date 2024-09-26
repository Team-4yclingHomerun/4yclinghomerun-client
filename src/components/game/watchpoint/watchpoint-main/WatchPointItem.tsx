import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import AnimatedStat from './AnimateStat';
import {
  WatchPointGameScoreType,
  WatchPointTeamRankType,
  WatchPointVsRecordType,
} from '@/types/WatchPointType';
import { cn } from '@/utils/cn';

type WatchPointItemProps = {
  game: WatchPointGameScoreType;
  homeGameRecord: WatchPointTeamRankType;
  awayGameRecord: WatchPointTeamRankType;
  homeVsRecord: WatchPointVsRecordType;
  awayVsRecord: WatchPointVsRecordType;
  onNextGame: () => void;
  onPrevGame: () => void;
  hasNextGame: boolean;
  hasPrevGame: boolean;
};
const WatchPointItem = ({
  game,
  homeGameRecord,
  awayGameRecord,
  homeVsRecord,
  awayVsRecord,
  onNextGame,
  onPrevGame,
  hasNextGame,
  hasPrevGame,
}: WatchPointItemProps) => {
  return (
    <section className="relative mb-6 rounded-lg bg-kt-black-4 p-8">
      <header className="mb-4 flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <div className="w-1/6"></div>
          <div className="flex w-4/6 items-center justify-center gap-8">
            <button
              aria-label="이전 날짜"
              className={cn(
                'text-white',
                !hasPrevGame
                  ? 'cursor-not-allowed text-gray-500'
                  : 'transition-colors duration-200 hover:text-rose-400',
              )}
              onClick={onPrevGame}
              disabled={!hasPrevGame}
            >
              <BsArrowLeftCircle size={30} />
            </button>
            <span className="text-3xl font-semibold">{game.displayDate}</span>
            <button
              aria-label="다음 날짜"
              className={cn(
                'text-white',
                !hasNextGame
                  ? 'cursor-not-allowed text-gray-500'
                  : 'transition-colors duration-200 hover:text-rose-400',
              )}
              onClick={onNextGame}
              disabled={!hasNextGame}
            >
              <BsArrowRightCircle size={30} />
            </button>
          </div>
          <div className="flex w-1/6 justify-end">
            <div className="rounded-md bg-gray-700 px-4 py-2 text-white">
              {game.endFlag === '3' ? '종료된 경기' : '예정 경기'}
            </div>
          </div>
        </div>
        <div className="flex justify-center text-base">
          {game.gtime} {game.stadium}
        </div>
      </header>

      <main className="grid grid-cols-3 gap-8">
        <article className="flex flex-col items-center justify-center gap-2">
          <img
            src={game.visitLogo}
            alt={game.visit}
            className="h-32 w-32 object-contain"
          />
          <p className="text-lg font-semibold text-white">
            {game.visit} (원정)
          </p>
          <p className="flex items-end gap-2 text-base text-gray-400">
            <span className="text-lg text-gray-300">
              {awayGameRecord.rank}위
            </span>
            {awayGameRecord.win}승 {awayGameRecord.lose}패{' '}
            {awayGameRecord.drawn}무
          </p>
        </article>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <AnimatedStat
              label="승률"
              leftValue={awayGameRecord.wra}
              rightValue={homeGameRecord.wra}
            />
            <AnimatedStat
              label="타율"
              leftValue={awayGameRecord.hra}
              rightValue={homeGameRecord.hra}
            />
            <AnimatedStat
              label="평균자책"
              leftValue={awayGameRecord.era}
              rightValue={homeGameRecord.era}
            />
            <AnimatedStat
              label="상대전적"
              leftValue={`${awayVsRecord.win}승`}
              rightValue={`${homeVsRecord.win}승`}
            />
          </div>
        </div>

        <section className="flex flex-col items-center justify-center gap-2">
          <img
            src={game.homeLogo}
            alt={game.home}
            className="h-36 w-36 object-contain"
          />
          <span className="text-lg font-semibold text-white">
            {game.home} (홈)
          </span>
          <p className="flex items-end gap-2 text-base text-gray-400">
            <span className="text-lg text-gray-300">
              {homeGameRecord.rank}위
            </span>
            {homeGameRecord.win}승 {homeGameRecord.lose}패{' '}
            {homeGameRecord.drawn}무
          </p>
        </section>
      </main>
    </section>
  );
};

export default WatchPointItem;
