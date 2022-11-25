export interface IStaticPostListData {
  thumbnailUrl: string;
  tag: string;
  author: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface IFiles {
  data: IStaticPostListData;
  content: string;
}

export interface IStaticPostList {
  categoryName: string;
  files: IFiles[];
  count: number;
}

export interface IBlogList {
  blogPostList: IStaticPostList[];
  count: number;
}
