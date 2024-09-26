import { useState } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { TCard } from '@/types/player';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import SectionLayout from '@/components/player/common/SectionLayout';
import CardArea from '@/components/player/common/CardArea';
import CardItem from '@/components/player/common/CardItem';
import CardError from '@/components/player/common/CardError';
import CardSkeleton from '@/components/player/common/CardSkeleton';

const HitterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSearch, setFilteredSearch] = useState<TCard[]>([]);

  const {
    data: catcherData,
    isLoading: isCatcherDataLoading,
    isError: isCatcherDataError,
  } = useAxios<TCard[]>({
    method: 'GET',
    url: `player/catcherlist`,
    initialData: [],
    shouldFetchOnMount: true,
  });
  const {
    data: infielderData,
    isLoading: isInfielderDataLoading,
    isError: isInfielderDataError,
  } = useAxios<TCard[]>({
    method: 'GET',
    url: `player/infielderlist`,
    initialData: [],
    shouldFetchOnMount: true,
  });
  const {
    data: outfielderData,
    isLoading: isOutfielderDataLoading,
    isError: isOutfielderDataError,
  } = useAxios<TCard[]>({
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
      {filteredSearch.length > 0 ? (
        <SectionLayout title="타자">
          <ErrorBoundary fallback={<CardError />}>
            <CardArea isError={isCatcherDataError}>
              {filteredSearch.map((item, index) => (
                <CardItem key={index} items={item} type="hitter" />
              ))}
            </CardArea>
          </ErrorBoundary>
        </SectionLayout>
      ) : (
        <>
          <SectionLayout title="포수">
            {isCatcherDataLoading ? (
              <CardSkeleton />
            ) : (
              <ErrorBoundary fallback={<CardError />}>
                <CardArea isError={isCatcherDataError}>
                  {filteredSearch.length > 0
                    ? filteredSearch.map((item, index) => (
                        <CardItem key={index} items={item} type="hitter" />
                      ))
                    : catcherData.map((item, index) => (
                        <CardItem key={index} items={item} type="hitter" />
                      ))}
                </CardArea>
              </ErrorBoundary>
            )}
          </SectionLayout>
          <br />
          <SectionLayout title="내야수">
            {isInfielderDataLoading ? (
              <CardSkeleton />
            ) : (
              <ErrorBoundary fallback={<CardError />}>
                <CardArea isError={isInfielderDataError}>
                  {infielderData.map((item, index) => (
                    <CardItem key={index} items={item} type="hitter" />
                  ))}
                </CardArea>
              </ErrorBoundary>
            )}
          </SectionLayout>
          <br />
          <SectionLayout title="외야수">
            {isOutfielderDataLoading ? (
              <CardSkeleton />
            ) : (
              <ErrorBoundary fallback={<CardError />}>
                <CardArea isError={isOutfielderDataError}>
                  {outfielderData.map((item, index) => (
                    <CardItem key={index} items={item} type="hitter" />
                  ))}
                </CardArea>
              </ErrorBoundary>
            )}
          </SectionLayout>
        </>
      )}
    </div>
  );
};
export default HitterPage;
