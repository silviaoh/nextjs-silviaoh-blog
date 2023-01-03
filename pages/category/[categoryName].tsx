import Head from 'next/head';
import React from 'react';

import PrimaryLayout from '../../src/components/layouts/PrimaryLayout';
import { IBlogListProps } from '../../src/types';
import { getBlogs, getPaths } from '../../src/utils/blogUtils';

import CategoryListView from '../../src/views/CategoryListView';

const Category = (props: IBlogListProps) => {
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
  const paths = getPaths();
  console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  const blogs = getBlogs();
  const count = blogs.reduce(
    (count: number, currPost: any) => count + currPost.count,
    0,
  );

  return { props: { count, blogs } };
};
