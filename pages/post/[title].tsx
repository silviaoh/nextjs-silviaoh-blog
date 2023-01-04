import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { IBlogPostProps, IPost } from '../../src/types';
import BlogPostService from '../../src/service/BlogPostService';
import getTitlePathParam from '../../src/utils/getTitlePathParam';
import PrimaryLayout from '../../src/components/layouts/PrimaryLayout';
import PostView from '../../src/views/PostView';

const Post = (props: IBlogPostProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>BLOG-POST</title>
      </Head>
      <PrimaryLayout {...props}>
        <PostView {...props.post} />
      </PrimaryLayout>
    </React.Fragment>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const blogPostService = new BlogPostService();
  const { data: posts } = await blogPostService.getListOfBlogPosts();
  const paths = posts.map((post: IPost) => {
    return { params: { title: getTitlePathParam(post.data.title) } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPostService = new BlogPostService();
  const { data: post } = await blogPostService.getBlogPost(
    params?.title as string,
  );

  const { data: categories } = await blogPostService.getCategoryMenu();
  return { props: { categories, post } };
};
