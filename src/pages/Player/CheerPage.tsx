import { useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { TCheer } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import CardArea from '@/components/player/CardArea';
import CheerError from '@/components/player/cheer/CheerError';
import CheerSkeleton from '@/components/player/cheer/CheerSkeleton';
import CheerCard from '@/components/player/CheerCard';
import SectionLayout from '@/components/player/SectionLayout';

interface TCheerResponse {
  data: {
    list: TCheer[];
  };
}

const CheerPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearch, setFilteredSearch] = useState<TCheer[]>([]);

  const {
    data: cheerData,
    isLoading,
    isError,
  } = useAxios<TCheerResponse, TCheer[]>({
    method: 'GET',
    url: `player/cheerleader`,
    initialData: { data: { list: [] } },
    shouldFetchOnMount: true,
    processData: (data: TCheerResponse) => data.data.list,
  });

  console.log(cheerData);

  const handleSearch = () => {
    const sanitizedSearchTerm = searchTerm.replace(/\s+/g, '');

    const results = (cheerData as TCheer[]).filter((items) =>
      items.leaderName.includes(sanitizedSearchTerm),
    );
    setFilteredSearch(results);
    setSearchTerm('');
  };

  return (
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
        <SectionLayout title="응원단">
          {isLoading ? (
            <CheerSkeleton />
          ) : (
            <ErrorBoundary fallback={<CheerError />}>
              <CardArea isError={isError}>
                {filteredSearch.length > 0
                  ? filteredSearch.map((item, index) => (
                      <CheerCard key={index} items={item} />
                    ))
                  : (cheerData as TCheer[]).map((item, index) => (
                      <CheerCard key={index} items={item} />
                    ))}
              </CardArea>
            </ErrorBoundary>
          )}
        </SectionLayout>
      </div>
    </div>
  );
};
export default CheerPage;
