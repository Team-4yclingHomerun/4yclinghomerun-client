import { useState } from 'react';

import { useAxios } from '@/hooks/useAxios';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import { TCoach } from '@/types/player';
import SectionLayout from '@/components/player/SectionLayout';
import CoachSkeleton from '@/components/player/coach/CoachSkeleton';
import CoachError from '@/components/player/coach/CoachError';
import CardArea from '@/components/player/CardArea';
import CoachCard from '@/components/player/CoachCard';

interface TCoachResponse {
  data: {
    list: TCoach[];
  };
}

const CoachPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearch, setFilteredSearch] = useState<TCoach[]>([]);

  const {
    data: coachData,
    isLoading,
    isError,
  } = useAxios<TCoachResponse, TCoach[]>({
    method: 'GET',
    url: `player/coachlist`,
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: TCoachResponse) => data.data.list,
  });

  const handleSearch = () => {
    const sanitizedSearchTerm = searchTerm.replace(/\s+/g, '');

    const results = (coachData as TCoach[]).filter((items) =>
      items.playerName.includes(sanitizedSearchTerm),
    );
    setFilteredSearch(results);
    setSearchTerm('');
  };

  return (
    <>
      <div className="mx-10 p-10">
        <div className="flex flex-col gap-12">
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
              <CoachSkeleton />
            ) : (
              <ErrorBoundary fallback={<CoachError />}>
                <CardArea isError={isError}>
                  {filteredSearch.length > 0
                    ? filteredSearch.map((item, index) => (
                        <CoachCard key={index} items={item} />
                      ))
                    : (coachData as TCoach[]).map((item, index) => (
                        <CoachCard key={index} items={item} />
                      ))}
                </CardArea>
              </ErrorBoundary>
            )}
          </SectionLayout>
        </div>
      </div>
    </>
  );
};
export default CoachPage;
