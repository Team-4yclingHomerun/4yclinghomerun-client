import { useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { ICoachListReponse, TCard, TCoach } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import SectionLayout from '@/components/player/common/SectionLayout';
import CardArea from '@/components/player/common/CardArea';
import CardItem from '@/components/player/common/CardItem';
import CardSkeleton from '@/components/player/common/CardSkeleton';
import CardError from '@/components/player/common/CardError';

const CoachPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearch, setFilteredSearch] = useState<TCard[]>([]);

  const {
    data: coachData,
    isLoading,
    isError,
  } = useAxios<ICoachListReponse, TCoach[]>({
    method: 'GET',
    url: `player/coachlist`,
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: ICoachListReponse) => data.data.list,
  });

  const handleSearch = () => {
    const sanitizedSearchTerm = searchTerm.replace(/\s+/g, '');

    const results = (coachData as TCard[]).filter((items) =>
      items.playerName.includes(sanitizedSearchTerm),
    );
    setFilteredSearch(results);
    setSearchTerm('');
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="선수 이름 검색"
            className="mb-4 rounded border p-2 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="ml-3 rounded bg-kt-red-3 p-2 text-white"
          >
            검색
          </button>
        </div>

        <SectionLayout title="코치">
          {isLoading ? (
            <CardSkeleton />
          ) : (
            <ErrorBoundary fallback={<CardError />}>
              <CardArea isError={isError}>
                {filteredSearch.length > 0
                  ? filteredSearch.map((item, index) => (
                      <CardItem key={index} items={item} type="coach" />
                    ))
                  : (coachData as TCard[]).map((item, index) => (
                      <CardItem key={index} items={item} type="coach" />
                    ))}
              </CardArea>
            </ErrorBoundary>
          )}
        </SectionLayout>
      </div>
    </>
  );
};
export default CoachPage;
