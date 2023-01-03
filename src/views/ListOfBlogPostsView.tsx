import React from 'react';
import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { IBlogListProps } from '../types';

const ListOfBlogPostsView = (props: IBlogListProps) => {
  const { blogs } = props;

  return (
    <PrimaryMainLayout
      mainTitle="All History"
      subTitle="차곡차곡 쌓여가는 기록"
    >
      {blogs.map((post, postIdx) => {
        return post.filesInCategory.map((file, fileIdx) => {
          return (
            <BlogPostCard key={`${postIdx}-${fileIdx}`} {...file.metaData} />
          );
        });
      })}
    </PrimaryMainLayout>
  );
};

export default ListOfBlogPostsView;
