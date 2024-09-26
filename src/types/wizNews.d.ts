export type TWizNewsItem = {
  updDttm: number;
  imgFilePath?: string;
  artcTitle: string;
  artcContents: string;
  artcSeq: number;
  viewCnt: number;
};

export type TNaverNewsItem = {
  oid: number;
  aid: number;
  officeName: string;
  title: string;
  subContent: string;
  datetime: string;
  thumbnail: string;
  totalCount: number;
};

export type TWizNewsDetail = {
  artcContents: string;
  artcNextSeq: number;
  artcPrevSeq: number;
  artcSeq: number;
  artcTitle: string;
  imgFilePath: string;
  regDttm: number;
  updDttm: number;
  viewCnt: number;
};

export type TNaverNewsDetail = {
  articleInfo: {
    article: {
      articleId: string;
      content: string;
      gdid: string;
      imageFiles: Array<{
        caption: string;
        height: string;
        name: string;
      }>;
      modifyDatetime: string;
      serviceDatetime: string;
      officeId: string;
      reporter: string;
      subcontent: string;
      title: string;
    };
    copyright: string;
  };
};

export interface APINaverNewsItemList {
  list: TNaverNewsItem[];
}

export interface APIWizNewsItemList {
  data: {
    list: TWizNewsItem[];
  };
}
