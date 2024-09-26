import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

import { TCrowdRankingSelectYearProps } from '@/types/GameCrowdRanking';
import { cn } from '@/utils/cn';

const GameCrowdRankingSelectYear = ({
  selectedYear,
  isOpenSelectYears,
  years,
  handlePreviousYear,
  handleNextYear,
  handleOpenSelectYears,
  handleYearClick,
}: TCrowdRankingSelectYearProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4">
      <div className="flex w-full items-center justify-center gap-10">
        <button
          onClick={handlePreviousYear}
          className={cn('text-xl', selectedYear <= 2019 && 'cursor-default')}
        >
          <MdOutlineArrowBackIos
            color={selectedYear <= 2019 ? '#717781' : '#d60c0c'}
          />
        </button>
        <button className="text-xl font-bold" onClick={handleOpenSelectYears}>
          {selectedYear}년
        </button>
        <button
          onClick={handleNextYear}
          className={cn(
            'text-xl',
            selectedYear >= new Date().getFullYear() && 'cursor-default',
          )}
        >
          <MdOutlineArrowForwardIos
            color={
              selectedYear >= new Date().getFullYear() ? '#717781' : '#d60c0c'
            }
          />
        </button>
      </div>
      {isOpenSelectYears && (
        <div className="absolute top-16 z-10 grid grid-cols-4 gap-4 rounded-md bg-kt-white p-5 text-center">
          {years.map((year) => (
            <button
              key={year}
              className={`h-12 w-20 rounded-md border-2 p-2 ${
                selectedYear === year
                  ? 'border-kt-gray-2 text-kt-gray-2 opacity-50'
                  : 'border-kt-red-2 font-bold text-kt-red-2 hover:opacity-70'
              }`}
              onClick={() => handleYearClick(year)}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default GameCrowdRankingSelectYear;
