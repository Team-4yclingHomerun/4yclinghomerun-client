import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import ScheduleCarousel from '@/components/home/contents/schedule/ScheduleCarousel';
import CalendarHeader from '@/components/game/schedule/CalendarHeader';
import CalendarView from '@/components/game/schedule/CalendarView';
import ListView from '@/components/game/schedule/ListView';
import SectionHeading from '@/components/common/typography/SectionHeading';
import { useScheduleStore } from '@/stores/ScheduleStore';

const SchedulePage = () => {
  const { year, month, setYear, setMonth, viewType } = useScheduleStore();

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 1.0,
  });

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <>
      <SectionHeading title="정규 리그 일정" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 1 }}
        className="mb-14"
      >
        <ScheduleCarousel />
      </motion.div>

      <div className="mx-auto w-full py-14 pb-4 text-white">
        <CalendarHeader
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />

        {viewType === 'calendar' ? <CalendarView /> : <ListView />}
      </div>

      <div className="flex justify-end">
        <p className="text-base text-red-400">
          * 경기 일정은 사정에 따라 변동될 수있습니다.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-2">
          <h2 className="h-auto w-auto rounded-sm bg-gray-400 px-2 text-black">
            TV
          </h2>
          <p className="text-gray-400">
            K-2T(KBS 2TV), M-T(MBC TV), S-T(SBS TV), KN-T(KBS N SPORTS),
            MS-T(MBC SPORTS PLUS), SS-T(SBS SPORTS), SPOTV+(SPOTV PLUS),
            SKY-T(SKY SPORTS)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="h-auto w-auto rounded-sm bg-gray-400 px-2 text-black">
            CMD
          </h2>
          <p className="text-gray-400">D-CMB(대전 CMB), K-CMB(광주 CMB) </p>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="h-auto w-auto rounded-sm bg-gray-400 px-2 text-black">
            IPTV
          </h2>
          <p className="text-gray-400">
            SPO-T(SPOTV), SPO-2T(SPOTV2), IB-T(IB SPORTS)
          </p>
        </div>
        <div className="flex items-start gap-2">
          <h2 className="h-auto w-auto rounded-sm bg-gray-400 px-2 text-black">
            RADIO
          </h2>
          <p className="text-gray-400">
            K-2R(KBS 2라디오), M-R(MBC 라디오), S-R(SBS 라디오), DK-R(대전 KBS
            라디오), TM-R(대구 MBC 라디오), PM-R(부산 MBC 라디오), DM-R(대전 MBC
            라디오), KM-R(광주 MBC 라디오), GM-R(MBC 경남 라디오), T-R(TBC
            라디오), TJ-R(TJB 라디오), KNN-R(KNN 라디오), KBC-R(KBC 라디오)
          </p>
        </div>
      </div>
    </>
  );
};

export default SchedulePage;
