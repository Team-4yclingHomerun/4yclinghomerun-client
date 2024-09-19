import { useParams } from 'react-router-dom';
// import useAxios from '@/hooks/useAxios';
import { useEffect } from 'react';
import naverNewsDetailData from '@/mocks/wiz-news/NaverNewsDetail';

const NewsDetailPage = () => {
  const { tab, id } = useParams();

  useEffect(() => {
    console.log(tab, id);
  }, [tab, id]);

  // const urls = {
  //   wiznews: `/article/newsdetail?artcSeq=${id}`,
  //   wizpress: `/article/wizpressdetail?artcSeq=${id}`,
  //   navernews: `/article/navernewsdetail?${id}`,
  // };

  // const processData = (responseData: any) => {
  //   if (tab === 'navernews') {
  //     // navernewsdetail 데이터
  //     return responseData.result.articleInfo.article || {};
  //   } else {
  //     // newsdetail과 wizpressdetail 데이터
  //     return responseData.data?.article || {};
  //   }
  // };

  // const { data, isLoading, isError, error } = useAxios({
  //   url: urls[tab as keyof typeof urls],
  //   method: 'GET',
  //   initialData: {},
  //   shouldFetchOnMount: true,
  //   processData,
  // });

  // if (isLoading) return <div>기사 불러오는 중...</div>;
  // if (isError) return <div>Error: {error}</div>;

  // HTML 태그 제거하고 텍스트만 반환
  const stripHtmlTags = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="border-ktwhite flex flex-col border">
        <div className="flex justify-between border-b border-kt-white p-2 pt-10">
          <span>
            발간일 : {naverNewsDetailData.articleInfo.article.serviceDatetime}
          </span>
          <span>
            최종 수정일 :{' '}
            {naverNewsDetailData.articleInfo.article.modifyDatetime}
          </span>
        </div>
        <h1 className="border-b border-kt-white p-3 text-center text-4xl">
          {naverNewsDetailData.articleInfo.article.title}
        </h1>
        <p className="p-2 text-center">
          {naverNewsDetailData.articleInfo.article.reporter}
        </p>
      </div>

      <img
        src={naverNewsDetailData.articleInfo.article.imageFiles[0].url}
        className="m-auto w-2/3"
      />

      <div className="flex flex-col gap-2">
        <strong className="text-2xl">
          {naverNewsDetailData.articleInfo.article.subcontent}
        </strong>
        <p>{stripHtmlTags(naverNewsDetailData.articleInfo.article.content)}</p>
        <span className="text-right text-sm">
          {naverNewsDetailData.articleInfo.copyright}
        </span>
      </div>
    </div>
  );
};

export default NewsDetailPage;
