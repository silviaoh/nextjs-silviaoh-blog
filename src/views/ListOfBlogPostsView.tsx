import React from 'react';

import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { IListOfBlogPostsProps } from '../types';

const ListOfBlogPostsView = (props: IListOfBlogPostsProps) => {
  const { posts } = props;
  console.log('posts', posts);
  return (
    <PrimaryMainLayout
      mainTitle="All History"
      subTitle="차곡차곡 쌓여가는 기록"
    >
      {posts.map((postsItem, postsIdx) => {
        return <BlogPostCard key={`${postsIdx}`} {...postsItem.data} />;
      })}
    </PrimaryMainLayout>
  );
};

export default ListOfBlogPostsView;
