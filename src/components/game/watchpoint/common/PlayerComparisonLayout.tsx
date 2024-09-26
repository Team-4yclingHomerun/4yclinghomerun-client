import PlayerAvatar from './PlayerAvatar';
import { TopPlayerInfoType, PitchInfoType } from '@/types/WatchPointType';

type PlayerComparisonLayoutProps = {
  homePlayer: TopPlayerInfoType | PitchInfoType;
  awayPlayer: TopPlayerInfoType | PitchInfoType;
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  children: React.ReactNode;
  homePlayerImg: string;
  awayPlayerImg: string;
  isHomeImgLoading: boolean;
  isAwayImgLoading: boolean;
  headerText?: React.ReactNode;
};

const PlayerComparisonLayout = ({
  homePlayer,
  awayPlayer,
  homePlayerImg,
  awayPlayerImg,
  isHomeImgLoading,
  isAwayImgLoading,
  leftSide,
  rightSide,
  children,
  headerText,
}: PlayerComparisonLayoutProps) => {
  return (
    <main className="w-full rounded-lg bg-kt-black-4 p-8 text-white">
      <section className="flex items-center justify-center gap-12">
        {/* 왼쪽 사이드 */}
        {leftSide}
        <article className="flex w-7/12 flex-col items-center">
          {/* 설명글 */}
          {headerText && (
            <div className="jusitfy-center mb-4 flex flex-col items-center text-base text-gray-500">
              {headerText}
            </div>
          )}
          {/* 선수 아바타 */}
          <header className="flex items-center gap-16">
            <PlayerAvatar
              player={awayPlayer}
              isLoading={isAwayImgLoading}
              imageUrl={awayPlayerImg}
            />
            <p className="animate-gradient bg-gradient-to-tr from-yellow-300 to-red-800 bg-clip-text text-3xl font-extrabold text-transparent">
              VS
            </p>
            <PlayerAvatar
              player={homePlayer}
              isLoading={isHomeImgLoading}
              imageUrl={homePlayerImg}
            />
          </header>

          {/* 구분선 */}
          <div className="mt-4 h-1 w-full rounded-full bg-kt-gray-2"></div>

          {/* 선수 스탯 */}
          <section className="w-full">{children}</section>
        </article>
        {/* 오른쪽 사이드 */}
        {rightSide}
      </section>
    </main>
  );
};

export default PlayerComparisonLayout;
