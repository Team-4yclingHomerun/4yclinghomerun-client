import { useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { TPlayer } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import CardArea from '@/components/player/CardArea';
import PlayerCard from '@/components/player/PlayerCard';
import HitterError from '@/components/player/hitter/HitterError';
import HitterSkeleton from '@/components/player/hitter/HitterSkeleton';
import SectionLayout from '@/components/player/SectionLayout';

const HitterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearch, setFilteredSearch] = useState<TPlayer[]>([]);

  const {
    data: catcherData,
    isLoading: isCatcherDataLoading,
    isError: isCatcherDataError,
  } = useAxios<TPlayer[]>({
    method: 'GET',
    url: `player/catcherlist`,
    initialData: [],
    shouldFetchOnMount: true,
  });
  const {
    data: infielderData,
    isLoading: isInfielderDataLoading,
    isError: isInfielderDataError,
  } = useAxios<TPlayer[]>({
    method: 'GET',
    url: `player/infielderlist`,
    initialData: [],
    shouldFetchOnMount: true,
  });
  const {
    data: outfielderData,
    isLoading: isOutfielderDataLoading,
    isError: isOutfielderDataError,
  } = useAxios<TPlayer[]>({
    method: 'GET',
    url: `player/outfielderlist`,
    initialData: [],
    shouldFetchOnMount: true,
  });

  const hitterData = [...catcherData, ...infielderData, ...outfielderData];

  const handleSearch = () => {
    const sanitizedSearchTerm = searchTerm.replace(/\s+/g, '');
    const results = hitterData.filter((items) =>
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
        {filteredSearch.length > 0 ? (
          <SectionLayout title="타자">
            <ErrorBoundary fallback={<HitterError />}>
              <CardArea isError={isCatcherDataError}>
                {filteredSearch.map((item, index) => (
                  <PlayerCard key={index} items={item} />
                ))}
              </CardArea>
            </ErrorBoundary>
          </SectionLayout>
        ) : (
          <>
            <SectionLayout title="포수">
              {isCatcherDataLoading ? (
                <HitterSkeleton />
              ) : (
                <ErrorBoundary fallback={<HitterError />}>
                  <CardArea isError={isCatcherDataError}>
                    {filteredSearch.length > 0
                      ? filteredSearch.map((item, index) => (
                          <PlayerCard key={index} items={item} />
                        ))
                      : catcherData.map((item, index) => (
                          <PlayerCard key={index} items={item} />
                        ))}
                  </CardArea>
                </ErrorBoundary>
              )}
            </SectionLayout>

            <SectionLayout title="내야수">
              {isInfielderDataLoading ? (
                <HitterSkeleton />
              ) : (
                <ErrorBoundary fallback={<HitterError />}>
                  <CardArea isError={isInfielderDataError}>
                    {infielderData.map((item, index) => (
                      <PlayerCard key={index} items={item} />
                    ))}
                  </CardArea>
                </ErrorBoundary>
              )}
            </SectionLayout>

            <SectionLayout title="외야수">
              {isOutfielderDataLoading ? (
                <HitterSkeleton />
              ) : (
                <ErrorBoundary fallback={<HitterError />}>
                  <CardArea isError={isOutfielderDataError}>
                    {outfielderData.map((item, index) => (
                      <PlayerCard key={index} items={item} />
                    ))}
                  </CardArea>
                </ErrorBoundary>
              )}
            </SectionLayout>
          </>
        )}
      </div>
    </div>
  );
};
export default HitterPage;
