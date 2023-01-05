import { useRouter } from 'next/router';
import React from 'react';
import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { IListOfBlogPostsProps } from '../types';

const CategoryListView = (props: IListOfBlogPostsProps) => {
  const { posts } = props;
  const router = useRouter();
  const query = router.query;
  const categoryName = (query.categoryName || '') as string;

  return (
    <PrimaryMainLayout mainTitle={categoryName} isGridMode>
      {posts.map((postsItem, postsIdx) => {
        return <BlogPostCard key={`${postsIdx}`} {...postsItem.data} />;
      })}
    </PrimaryMainLayout>
  );
};

export default CategoryListView;
