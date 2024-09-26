import { useParams } from 'react-router-dom';
import { GrFormView } from 'react-icons/gr';

import { useAxios } from '@/hooks/useAxios';
import NewsDetailSkeleton from '@/components/wiz-news/NewsDetailSkeleton';
import { formatTimeStamp } from '@/utils/formattingDate';
import '@/styles/news/NewsDetail.css';

import { TNaverNewsDetail, TWizNewsDetail } from '@/types/wizNews';

const NewsDetailPage = () => {
  const { tab, id } = useParams();

  const urls = {
    wiznews: `/article/newsdetail?artcSeq=${id}`,
    wizpress: `/article/wizpressdetail?artcSeq=${id}`,
    navernews: `/article/navernewsdetail?${id}`,
  };

  const processData = (responseData: unknown) => {
    if (tab === 'navernews') {
      // navernewsdetail 데이터
      return responseData.result.articleInfo || {};
    } else {
      // newsdetail과 wizpressdetail 데이터
      return responseData.data?.article || {};
    }
  };

  const { data, isLoading, isError, error } = useAxios({
    url: urls[tab as keyof typeof urls],
    method: 'GET',
    initialData: {},
    shouldFetchOnMount: true,
    processData,
  });

  if (isLoading) return <NewsDetailSkeleton />;
  if (isError) return <div>Error: {error}</div>;

  // 데이터 타입 확인
  const isWizNew = (
    data: TWizNewsDetail | TNaverNewsDetail,
  ): data is TWizNewsDetail => (data as TWizNewsDetail).artcTitle !== undefined;

  const newsDetail = {
    regDate: isWizNew(data)
      ? formatTimeStamp(data.regDttm)
      : data.article.serviceDatetime,
    updDate: isWizNew(data)
      ? formatTimeStamp(data.updDttm)
      : data.article.modifyDatetime,
    title: isWizNew(data) ? data.artcTitle : data.article.title,
    viewCnt: isWizNew(data) ? data.viewCnt : null,
    reporter: isWizNew(data) ? null : data.article.reporter,
    content: isWizNew(data) ? data.artcContents : data.article.content,
  };

  return (
    <div className="m-auto flex max-w-screen-2xl flex-col gap-20">
      <div className="flex flex-col">
        <div className="flex justify-between border-b border-kt-white p-2 px-5 pt-10">
          <span>발간일 : {newsDetail.regDate}</span>
          <span>최종 수정일 : {newsDetail.updDate}</span>
        </div>
        <h1 className="border-b border-kt-white p-3 text-center text-3xl">
          <span className="max-w-screen-md inline-block">{newsDetail.title}</span>
        </h1>
        <p className="p-2 text-center">
          {newsDetail.viewCnt ? (
            <span className="flex items-center justify-center">
              <GrFormView size={24} />
              {newsDetail.viewCnt}
            </span>
          ) : null}
          {newsDetail.reporter}
        </p>
      </div>

      {tab === 'wiznews' && (
        <img
          src={data.imgFilePath}
          className="m-auto w-2/3"
          alt={data.artcTitle}
        />
      )}

      <div className="m-auto flex max-w-screen-md flex-col gap-10">
        {tab === 'navernews' && (
          <strong className="text-xl">{data.article.subcontent}</strong>
        )}
        {/* 뉴스 기사 본문 */}
        <p
          className="custom-html"
          dangerouslySetInnerHTML={{
            __html: newsDetail.content,
          }}
        />
        <span className="text-right text-sm">{data.copyright}</span>
      </div>
    </div>
  );
};

export default NewsDetailPage;
