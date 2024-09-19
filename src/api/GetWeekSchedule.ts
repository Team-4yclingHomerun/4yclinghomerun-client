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
      url: '/game/weekschedule',
      initialData: {
        data: {
          list: [],
        },
      },
      shouldFetchOnMount: true,
    },
  );

  return { data, isLoading, isError, error };
};

export { GetWeekSchedule };
