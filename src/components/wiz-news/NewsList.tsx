import { Link } from 'react-router-dom';

import { MdDateRange } from 'react-icons/md';
import { GrFormView } from 'react-icons/gr';

import { formatTimeStamp } from '@/utils/formattingDate';
import { TNaverNewsItem, TWizNewsItem } from '@/types/wizNews';

type NewsListProps = {
  newsItems: (TWizNewsItem | TNaverNewsItem)[];
  tab: string;
};

// 데이터 타입 확인
const isWizNewsItem = (
  news: TWizNewsItem | TNaverNewsItem,
): news is TWizNewsItem => (news as TWizNewsItem).artcTitle !== undefined;

// HTML 태그 제거하고 텍스트만 반환
const stripHtmlTags = (html: string) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const NewsList = ({ newsItems, tab }: NewsListProps) => {
  const modifyNewsListData = (news: TWizNewsItem | TNaverNewsItem) => {
    const isWiz = isWizNewsItem(news);
    return {
      id: isWiz ? news.artcSeq : `${news.oid}-${news.aid}`,
      title: isWiz ? news.artcTitle : news.title,
      content: isWiz ? stripHtmlTags(news.artcContents) : news.subContent,
      date: isWiz ? formatTimeStamp(news.updDttm) : news.datetime,
      viewCount: isWiz ? news.viewCnt : news.totalCount,
      imageUrl: isWiz ? news.imgFilePath : news.thumbnail,
      officeName: isWiz ? null : news.officeName,
    };
  };

  return (
    <ul>
      {newsItems.map((news) => {
        const newsListData = modifyNewsListData(news);

        return (
          <li
            key={newsListData.id}
            className="group m-4 rounded-sm bg-gradient-to-r from-kt-black-5 to-transparent transition duration-200 hover:bg-gradient-to-l"
          >
            <Link
              to={`/news/${tab}/detail/${newsListData.id}`}
              className="flex"
            >
              {newsListData.imageUrl && (
                <img
                  src={newsListData.imageUrl}
                  alt={newsListData.title}
                  width={300}
                  className="h-[170px] w-full max-w-[300px] border-8 border-kt-black-5 object-cover object-top transition-all duration-200 group-hover:border-kt-gray-1"
                />
              )}
              <div className="flex w-full justify-between">
                <div className="w-4/5 py-6 pl-5">
                  <h3 className="mb-3 text-2xl font-bold">
                    {newsListData.title}
                  </h3>
                  <span className="inline-block max-h-[3.75rem] w-full truncate whitespace-normal break-words leading-5">
                    {newsListData.content}
                  </span>
                </div>

                <div className="flex w-1/5 flex-col items-end p-3">
                  <span className="flex items-center gap-1">
                    {newsListData.date}
                    <MdDateRange />
                  </span>
                  <span className="flex items-center gap-1">
                    {newsListData.viewCount}
                    <GrFormView />
                  </span>
                  {newsListData.officeName && (
                    <span>{newsListData.officeName}</span>
                  )}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
