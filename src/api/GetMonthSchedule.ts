import { useAxios } from '@/hooks/useAxios';
import { KtWizMonthSchedule } from '@/types/ScheduleType';

interface GetMonthScheduleResponse {
  data: {
    list: KtWizMonthSchedule[];
  };
}

const GetMonthSchedule = (year: number, month: number) => {
  const yearMonth = `${year}${month.toString().padStart(2, '0')}`;
  const { data, isLoading, isError, error } =
    useAxios<GetMonthScheduleResponse>({
      method: 'GET',
      url: `/game/monthschedule/yearMonth-${yearMonth}`,
      initialData: {
        data: {
          list: [],
        },
      },
      serverType: 'backend',
      shouldFetchOnMount: true,
    });

  return { data, isLoading, isError, error };
};

export { GetMonthSchedule };
