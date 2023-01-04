import React from 'react';
import Head from 'next/head';

import PrimaryLayout from '../src/components/layouts/PrimaryLayout';
import ListOfBlogPostsView from '../src/views/ListOfBlogPostsView';
import { IListOfBlogPostsProps } from '../src/types';
import BlogPostService from '../src/service/BlogPostService';

const ListOfBlogPosts = (props: IListOfBlogPostsProps) => {
  console.log('props', props);
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
  const blogPostService = new BlogPostService();
  const { data: posts } = await blogPostService.getListOfBlogPosts();
  const { data: categories } = await blogPostService.getCategoryMenu();

  return { props: { posts, categories } };
};
