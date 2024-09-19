import SearchInput from '../common/ui/SearchInput';

import Pagination from './Pagination';
import NewsList from './NewsList';

import { TNaverNewsItem, TWizNewsItem } from '@/types/wizNews';
import NewsListSkeleton from './NewsSkeleton';

type WizNewsProps = {
  newsList: (TWizNewsItem | TNaverNewsItem)[];
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  onSearch: (searchWord: string) => void;
};

const isNaverNews = (newsList: (TWizNewsItem | TNaverNewsItem)[]): boolean => {
  return newsList.some((news) => (news as TWizNewsItem).artcTitle == undefined);
};

const WizNews = ({
  newsList,
  isLoading,
  isError,
  error,
  currentPage,
  onPageChange,
  onSearch,
}: WizNewsProps) => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(newsList.length / itemsPerPage);

  const currentNews = newsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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

      {isLoading ? <NewsListSkeleton /> : <NewsList newsItems={currentNews} />}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default WizNews;
