import React from 'react';
import Head from 'next/head';

import PrimaryLayout from '../src/components/layouts/PrimaryLayout';
import ListOfBlogPostsView from '../src/views/ListOfBlogPostsView';
import { IBlogListProps } from '../src/types';
import { getBlogs } from '../src/utils/blogUtils';

const ListOfBlogPosts = (props: IBlogListProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>BLOG</title>
      </Head>
      <PrimaryLayout {...props}>
        <ListOfBlogPostsView {...props} />
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default ListOfBlogPosts;

export const getStaticProps = async () => {
  const blogs = getBlogs();
  const count = blogs.reduce(
    (count: number, currPost: any) => count + currPost.count,
    0,
  );

  return { props: { count, blogs } };
};
