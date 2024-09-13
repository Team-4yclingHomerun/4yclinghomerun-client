import ScheduleCarousel from './ScheduleCarousel';
import TeamRank from '../rank/TeamRank';
import LiveBroadcast from '../live/LiveBroadcast';
import { GameScheduleData } from '@/mocks/home/GameSchedule';

const TeamSchedule = () => {
  return (
    <div className="flex flex-col gap-16 py-4">
      <ScheduleCarousel schedules={GameScheduleData} />

      <div className="grid w-full grid-cols-2 gap-8">
        <TeamRank />
        <LiveBroadcast />
      </div>
    </div>
  );
};

export default TeamSchedule;
