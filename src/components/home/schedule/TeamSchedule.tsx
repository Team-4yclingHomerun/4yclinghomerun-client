import ScheduleCarousel from './ScheduleCarousel';
import TeamRank from '../rank/TeamRank';
import LiveBroadcast from '../live/LiveBroadcast';
import { GameScheduleData } from '@/mocks/home/GameSchedule';

const TeamSchedule = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="space-y-6">
        <h1 className="text-3xl font-extrabold">GAME & RANK</h1>
        <ScheduleCarousel schedules={GameScheduleData} />
      </div>

      <div className="grid w-full grid-cols-2 gap-8 px-8">
        <TeamRank rank={5} wins={62} losses={64} ties={2} psRate={0.555} />
        <LiveBroadcast />
      </div>
    </div>
  );
};

export default TeamSchedule;
