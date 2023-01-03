import { GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import PrimaryLayout from '../../src/components/layouts/PrimaryLayout';
import BlogPostService from '../../src/service/BlogPostService';
import { IListOfBlogPostsProps } from '../../src/types';
import { getChildrenDirectory } from '../../src/utils/mdxUtils';

import CategoryListView from '../../src/views/CategoryListView';

const Category = (props: IListOfBlogPostsProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>BLOG-Category</title>
      </Head>
      <PrimaryLayout {...props}>
        <CategoryListView {...props} />
      </PrimaryLayout>
    </React.Fragment>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const categories = getChildrenDirectory('') || [];
  const paths = categories.map((categoryName) => ({
    params: { categoryName },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { categoryName } = params as ParsedUrlQuery;

  const blogPostService = new BlogPostService();
  const { data: posts } = await blogPostService.getListOfFilteredBlogPosts(
    categoryName as string,
  );
  const { data: categories } = await blogPostService.getCategoryMenu();

  return { props: { posts, categories } };
};
