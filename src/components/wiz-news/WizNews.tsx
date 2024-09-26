import SearchInput from '../common/ui/SearchInput';

import Pagination from './Pagination';
import NewsList from './NewsList';
import NewsListSkeleton from './NewsSkeleton';

import { TNaverNewsItem, TWizNewsItem } from '@/types/wizNews';

type WizNewsProps = {
  newsList: (TWizNewsItem | TNaverNewsItem)[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  tab: string;
  onPageChange: (pageNumber: number) => void;
  onSearch: (searchWord: string) => void;
};

const isNaverNews = (newsList: (TWizNewsItem | TNaverNewsItem)[]): boolean => {
  if (!Array.isArray(newsList)) {
    return false;
  }

  return newsList.some(
    (news) => (news as TWizNewsItem).artcTitle === undefined,
  );
};

const WizNews = ({
  newsList = [],
  isLoading,
  isError,
  error,
  currentPage,
  tab,
  onPageChange,
  onSearch,
}: WizNewsProps) => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  const currentNews = Array.isArray(newsList)
    ? newsList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    : [];

  if (isError) return <div>Error: {error}</div>;

  const selectOptions = ['제목', '내용'];
  const noSearchInput = isNaverNews(newsList);

  return (
    <div className="m-auto mt-10 flex max-w-screen-2xl flex-col gap-4">
      {!noSearchInput && (
        <SearchInput
          onSearch={onSearch}
          showSelect={true}
          selectOptions={selectOptions}
        />
      )}

      {isLoading ? (
        <NewsListSkeleton />
      ) : (
        <NewsList newsItems={currentNews} tab={tab} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default WizNews;
