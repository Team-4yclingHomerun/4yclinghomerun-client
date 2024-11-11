import { useAxios } from '@/hooks/useAxios';
import { KtWizMonthSchedule } from '@/types/ScheduleType';

interface GetWeekScheduleResponse {
  data: {
    list: KtWizMonthSchedule[];
  };
}

const GetWeekSchedule = () => {
  const { data, isLoading, isError, error } = useAxios<GetWeekScheduleResponse>(
    {
      method: 'GET',
      url: '/game/weekSchedule',
      initialData: {
        data: {
          list: [],
        },
      },
      serverType: 'backend',
      shouldFetchOnMount: true,
    },
  );

  return { data, isLoading, isError, error };
};

export { GetWeekSchedule };
