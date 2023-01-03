import React from 'react';

export interface IBlogMetaData {
  id: string;
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
  data: IBlogMetaData;
  content: string;
}

export interface IPosts {
  categoryName: string;
  post: IPost[];
  count: number;
}

export interface IListOfBlogPostsProps {
  posts: IPost[];
  categories: { categoryName: string; count: number }[];
}

export interface IPrimaryLayoutProps extends IListOfBlogPostsProps {
  children: React.ReactNode;
}

export interface IBlogViewProps extends IListOfBlogPostsProps {
  mainTitle: string;
  subTitle: string;
}

export interface IBlogPostPaths {
  params: { slug: string };
}

export interface IBlogPostProps extends IListOfBlogPostsProps {
  blogPost: IPost;
}
