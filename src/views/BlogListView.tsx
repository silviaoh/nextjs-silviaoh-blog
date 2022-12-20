import React from 'react';
import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryBlogListLayout from '../components/layouts/PrimaryBlogListLayout';
import { IBlogListProps } from '../types';

const BlogView = (props: IBlogListProps) => {
  const { blogs } = props;

  return (
    <PrimaryBlogListLayout
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
    </PrimaryBlogListLayout>
  );
};

export default BlogView;
