import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

import ScoreTable from '@/components/game/boxscore/ScoreTable';
import {
  BoxScoreGameScheduleType,
  BoxScoreScoreBoardType,
} from '@/types/BoxScoreType';
import { cn } from '@/utils/cn';

type BoxScoreItemProps = {
  game: BoxScoreGameScheduleType;
  scoreBoard: BoxScoreScoreBoardType[];
  onNextGame: () => void;
  onPrevGame: () => void;
  hasNextGame: boolean;
  hasPrevGame: boolean;
};

const BoxScoreItem = ({
  game,
  scoreBoard,
  onNextGame,
  onPrevGame,
  hasNextGame,
  hasPrevGame,
}: BoxScoreItemProps) => {
  return (
    <section className="relative mb-6 rounded-lg bg-kt-black-4 p-12">
      <header className="flex flex-col">
        <div className="mb-4 flex items-center justify-between">
          {/* absolute를 사용하지 않기 위해 빈 공간 추가 */}
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
            <span className="text-3xl font-semibold">
              {game.gyear}년 {game.gmonth}월 {game.gday}일
            </span>
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
              {game.endFlag === '1' ? '종료된 경기' : '예정 경기'}
            </div>
          </div>
        </div>

        <div className="text-center text-sm">
          {game.gtime} {game.stadium} | 관중: {game.crowdCn?.toLocaleString()}명
        </div>
      </header>

      <main className="grid grid-cols-3 gap-2">
        <article className="flex flex-col items-center justify-center gap-2">
          <img
            src={game.visitLogo}
            alt={game.visit}
            className="h-36 w-36 object-contain"
          />
          <p className="text-2xl font-extrabold text-white">{game.vscore}</p>
          <p className="text-lg font-semibold text-white">
            {game.visit} (원정)
          </p>
        </article>

        <div className="flex items-center justify-center">
          <p className="text-4xl font-bold text-white">VS</p>
        </div>

        <section className="flex flex-col items-center justify-center gap-2">
          <img
            src={game.homeLogo}
            alt={game.home}
            className="h-36 w-36 object-contain"
          />
          <span className="text-2xl font-extrabold text-white">
            {game.hscore}
          </span>
          <span className="text-lg font-semibold text-white">
            {game.home} (홈)
          </span>
        </section>

        <footer className="col-span-3 mt-4">
          <ScoreTable scoreBoard={scoreBoard} />
        </footer>
      </main>
    </section>
  );
};

export default BoxScoreItem;
