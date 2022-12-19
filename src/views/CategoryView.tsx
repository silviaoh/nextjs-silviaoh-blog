import { useRouter } from 'next/router';
import React from 'react';
import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryBlogListLayout from '../components/layouts/PrimaryBlogListLayout';
import { IBlogList } from '../types';

const CategoryView = (props: IBlogList) => {
  const { blogPostList } = props;

  const router = useRouter();
  const query = router.query;

  const mainTitle =
    blogPostList.find((post) => post.categoryName === query.category)
      ?.categoryName || '';

  return (
    <PrimaryBlogListLayout mainTitle={mainTitle}>
      {blogPostList.map((post, postIdx) => {
        return post.files.map((file, fileIdx) => {
          return (
            post.categoryName === query.category && (
              <BlogPostCard key={`${postIdx}-${fileIdx}`} {...file.data} />
            )
          );
        });
      })}
    </PrimaryBlogListLayout>
  );
};

export default CategoryView;
