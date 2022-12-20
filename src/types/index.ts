export interface IBlogMetaData {
  thumbnailUrl: string;
  tag: {
    name: string;
    color: string;
  };
  author: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface IFilesInCategory {
  metaData: IBlogMetaData;
  content: string;
}

export interface IBlogs {
  categoryName: string;
  filesInCategory: IFilesInCategory[];
  count: number;
}

export interface IBlogListProps {
  blogs: IBlogs[];
  count: number;
}

export interface IBlogViewProps extends IBlogListProps {
  mainTitle: string;
  subTitle: string;
}
