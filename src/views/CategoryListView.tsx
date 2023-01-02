import { useRouter } from 'next/router';
import React from 'react';
import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { IBlogListProps } from '../types';

const CategoryListView = (props: IBlogListProps) => {
  const { blogs } = props;

  const router = useRouter();
  const query = router.query;

  const mainTitle =
    blogs.find((post) => post.categoryName === query.category)?.categoryName ||
    '';

  const isCategoryBlogsList = (mappedCategoryName: string) =>
    mappedCategoryName === query.category;

  return (
    <PrimaryMainLayout mainTitle={mainTitle}>
      {blogs.map((post, postIdx) => {
        return post.filesInCategory.map((file, fileIdx) => {
          return (
            isCategoryBlogsList(post.categoryName) && (
              <BlogPostCard key={`${postIdx}-${fileIdx}`} {...file.metaData} />
            )
          );
        });
      })}
    </PrimaryMainLayout>
  );
};

export default CategoryListView;
