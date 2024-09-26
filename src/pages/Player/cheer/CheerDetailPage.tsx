import ErrorBoundary from '@/components/error/ErrorBoundary';
import Profile from '@/components/player/cheer/Profile';
import DetailSkeleton from '@/components/player/common/DetailSkeleton';
import ProfileError from '@/components/player/common/ProfileError';
import { useAxios } from '@/hooks/useAxios';
import { ICheerListReponse, TCheer } from '@/types/player';
import { useParams } from 'react-router-dom';

const CheerDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useAxios<ICheerListReponse>({
    method: 'GET',
    url: `/player/cheerleader`,
    initialData: {
      data: { list: [] },
    },
    shouldFetchOnMount: true,
  });

  const findItemById = (regDttm: number): TCheer | undefined => {
    return data.data.list.find((item) => item.regDttm === Number(id));
  };

  const player = findItemById(Number(id));

  return (
    <>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <ErrorBoundary fallback={<ProfileError />}>
          <Profile items={player!} isError={isError} />
        </ErrorBoundary>
      )}
    </>
  );
};
export default CheerDetailPage;
