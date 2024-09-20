import { useAxios } from '@/hooks/useAxios';
import { TCoachDetail } from '@/types/player';
import { useParams } from 'react-router-dom';

interface TCoachDetailResponse {
  data: {
    coachsetp: TCoachDetail;
  };
}

const CoachDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useAxios<
    TCoachDetailResponse,
    TCoachDetail
  >({
    method: 'GET',
    url: `/player/coachdetail?pcode=89620`,
    initialData: {
      data: {
        coachsetp: {
          backnum: '',
          birth: '',
          career: '',
          career2: '',
          engName: '',
          gyear: '',
          height: '',
          heightWeight: '',
          hittype: '',
          mobilePlayerImg1: '',
          mobilePlayerImg2: '',
          pcode: '',
          playerName: '',
          playerPrvwImg: '',
          playerPrvwImg2: '',
          playerPrvwImg3: '',
          position: '',
          teamCode: '',
          teamName: '',
          weight: '',
        },
      },
    },
    shouldFetchOnMount: true,
    processData: (data: TCoachDetailResponse) => data.data.coachsetp,
  });

  console.log(data, id);
  return <div>CoachDetailPage</div>;
};
export default CoachDetailPage;
