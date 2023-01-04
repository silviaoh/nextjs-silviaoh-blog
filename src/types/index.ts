import React from 'react';

export interface IBlogPostData {
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

export interface IPost {
  data: IBlogPostData;
  content: string;
}

export interface ICategories {
  categoryName: string;
  count: number;
}

export interface IPosts {
  categoryName: string;
  post: IPost[];
  count: number;
}

export interface IListOfBlogPostsProps {
  posts: IPost[];
  categories: ICategories[];
  children?: React.ReactNode;
}

export interface IBlogViewProps extends IListOfBlogPostsProps {
  mainTitle: string;
  subTitle: string;
}

export interface IBlogPostPaths {
  params: { slug: string };
}

export interface IBlogPostProps {
  post: IPost;
  categories: ICategories[];
  children?: React.ReactNode;
}
