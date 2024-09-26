import { useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { TCard } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import SectionLayout from '@/components/game/boxscore/SectionLayout';
import CardArea from '@/components/player/common/CardArea';
import CardItem from '@/components/player/common/CardItem';
import CardError from '@/components/player/common/CardError';
import CardSkeleton from '@/components/player/common/CardSkeleton';

const PitcherPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearch, setFilteredSearch] = useState<TCard[]>([]);

  const {
    data: pitcherData,
    isLoading,
    isError,
  } = useAxios<TCard[]>({
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
    <div className="">
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
          <CardSkeleton />
        ) : (
          <ErrorBoundary fallback={<CardError />}>
            <CardArea isError={isError}>
              {filteredSearch.length > 0
                ? filteredSearch.map((item, index) => (
                    <CardItem key={index} items={item} type="pitcher" />
                  ))
                : pitcherData.map((item, index) => (
                    <CardItem key={index} items={item} type="pitcher" />
                  ))}
            </CardArea>
          </ErrorBoundary>
        )}
      </SectionLayout>
    </div>
  );
};

export default PitcherPage;
