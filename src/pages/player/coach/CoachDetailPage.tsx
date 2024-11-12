import { useParams } from 'react-router-dom';

import { useAxios } from '@/hooks/useAxios';
import { ICoachDetailReponse, TProfile } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import DetailSkeleton from '@/components/player/common/DetailSkeleton';
import ProfileError from '@/components/player/common/ProfileError';
import Profile from '@/components/player/common/Profile';

const CoachDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useAxios<ICoachDetailReponse>({
    method: 'GET',
    url: `/player/coachdetail/pcode-${id}`,
    initialData: {
      data: {
        coachstep: {
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
  });

  const { coachstep } = data.data;

  return (
    <>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <ErrorBoundary fallback={<ProfileError />}>
          <Profile
            items={coachstep as TProfile}
            isError={isError}
            type="coach"
          />
        </ErrorBoundary>
      )}
    </>
  );
};
export default CoachDetailPage;
