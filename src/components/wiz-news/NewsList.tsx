import { Link } from 'react-router-dom';

import { MdDateRange } from 'react-icons/md';
import { GrFormView } from 'react-icons/gr';

import { formatTimeStamp } from '@/utils/formattingDate';
import { TNaverNewsItem, TWizNewsItem } from '@/types/wizNews';

type NewsListProps = {
  newsItems: (TWizNewsItem | TNaverNewsItem)[];
};

// 데이터 타입 확인
const isWizNewsItem = (
  news: TWizNewsItem | TNaverNewsItem,
): news is TWizNewsItem => {
  return (news as TWizNewsItem).artcTitle !== undefined;
};

// HTML 태그 제거하고 텍스트만 반환
const stripHtmlTags = (html: string) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const NewsList = ({ newsItems }: NewsListProps) => {
  return (
    <ul>
      {newsItems.map((news) => (
        <li
          key={isWizNewsItem(news) ? news.artcSeq : news.aid}
          className="group m-4 rounded-sm bg-gradient-to-r from-kt-black-5 to-transparent transition duration-200 hover:bg-gradient-to-l"
        >
          <Link
            to={`/news/detail/${isWizNewsItem(news) ? news.artcSeq : `oid=${news.oid}&aid=${news.aid}`}`}
            className="flex"
          >
            {isWizNewsItem(news) && news.imgFilePath ? (
              <img
                src={news.imgFilePath}
                alt={news.artcTitle}
                width={300}
                className="border-8 border-kt-black-5 transition-all duration-200 group-hover:border-kt-gray-1"
              />
            ) : !isWizNewsItem(news) && news.thumbnail ? (
              <img
                src={news.thumbnail}
                alt={news.title}
                width={300}
                className="h-[170px] w-full max-w-[300px] border-8 border-kt-black-5 object-cover object-left-top transition-all duration-200 group-hover:border-kt-gray-1"
              />
            ) : null}

            <div className="flex w-full justify-between">
              <div className="w-4/5 py-6 pl-5">
                <h3 className="mb-3 text-2xl font-bold">
                  {isWizNewsItem(news) ? news.artcTitle : news.title}
                </h3>
                <span className="inline-block max-h-[3.75rem] w-full truncate whitespace-normal break-words leading-5">
                  {isWizNewsItem(news)
                    ? stripHtmlTags(news.artcContents)
                    : news.subContent}
                </span>
              </div>

              <div className="flex w-1/5 flex-col items-end p-3">
                <span className="flex items-center gap-1">
                  {isWizNewsItem(news)
                    ? formatTimeStamp(news.updDttm)
                    : news.datetime}
                  <MdDateRange />
                </span>
                <span className="flex items-center gap-1">
                  {isWizNewsItem(news) ? news.viewCnt : news.totalCount}
                  <GrFormView />
                </span>
                {!isWizNewsItem(news) ? news.officeName : null}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
