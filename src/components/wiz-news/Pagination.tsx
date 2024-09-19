import { cn } from '@/utils/cn';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  // 현재 페이지 기준 5개 페이지 번호만 노출
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    // eslint-disable-next-line prefer-const
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="mt-4 flex justify-center gap-2">
      {/* 처음 페이지로 */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 disabled:opacity-30"
      >
        <BiFirstPage />
      </button>

      {/* 이전 페이지로 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 disabled:opacity-30"
      >
        ↼
      </button>

      {/* 페이지 번호 */}
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={cn(
            'rounded-full px-4 py-2',
            currentPage === pageNumber ? 'bg-kt-gray-1' : 'bg-transparent',
          )}
        >
          {pageNumber}
        </button>
      ))}

      {/* 다음 페이지로 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 disabled:opacity-30"
      >
        ⇀
      </button>

      {/* 마지막 페이지로 */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 disabled:opacity-30"
      >
        <BiLastPage />
      </button>
    </div>
  );
};
export default Pagination;
