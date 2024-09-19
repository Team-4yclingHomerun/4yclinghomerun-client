import { useState } from 'react';
import { useAxios } from '@/hooks/useAxios';

import { TPlayer } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import CardArea from '@/components/player/CardArea';
import PlayerCard from '@/components/player/PlayerCard';
import PitcherError from '@/components/player/pitcher/PitcherError';
import PitcherSkeleton from '@/components/player/pitcher/PitcherSkeleton';
import SectionLayout from '@/components/player/SectionLayout';

const PitcherPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearch, setFilteredSearch] = useState<TPlayer[]>([]);

  const {
    data: pitcherData,
    isLoading,
    isError,
  } = useAxios<TPlayer[]>({
    method: 'GET',
    url: `player/pitcherlist`,
    initialData: [],
    shouldFetchOnMount: true,
  });

  const handleSearch = () => {
    const sanitizedSearchTerm = searchTerm.replace(/\s+/g, '');
    const results = pitcherData.filter((items) =>
      items.playerName.includes(sanitizedSearchTerm),
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
        <SectionLayout title="투수">
          {isLoading ? (
            <PitcherSkeleton />
          ) : (
            <ErrorBoundary fallback={<PitcherError />}>
              <CardArea isError={isError}>
                {filteredSearch.length > 0
                  ? filteredSearch.map((item, index) => (
                      <PlayerCard key={index} items={item} />
                    ))
                  : pitcherData.map((item, index) => (
                      <PlayerCard key={index} items={item} />
                    ))}
              </CardArea>
            </ErrorBoundary>
          )}
        </SectionLayout>
      </div>
    </div>
  );
};

export default PitcherPage;
