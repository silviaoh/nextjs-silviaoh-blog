import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import PrimaryLayout from '../../src/components/layouts/PrimaryLayout';
import { IBlogPostProps, IPost } from '../../src/types';
import { getBlogPostPaths, getBlogs } from '../../src/utils/blogUtils';
import { getFile } from '../../src/utils/mdxUtils';
import PostView from '../../src/views/PostView';

const Post = (props: IBlogPostProps) => {
  const { blogs, count, blogPost } = props;

  return (
    <React.Fragment>
      <Head>
        <title>BLOG-POST</title>
      </Head>
      <PrimaryLayout {...{ blogs, count }}>
        <PostView {...blogPost} />
      </PrimaryLayout>
    </React.Fragment>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const blogs = getBlogs();
  const paths = getBlogPostPaths(blogs);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (props) => {
  const blogs = getBlogs();
  const count = blogs.reduce(
    (count: number, currPost: any) => count + currPost.count,
    0,
  );
  const clickedCategory = blogs.find((blog) =>
    blog.filesInCategory.find(
      (categoryPost: IPost) => categoryPost.data.id === props.params?.slug,
    ),
  ) || { categoryName: '' };

  if (!props.params) {
    throw new Error('props.params is undefined');
  }

  if (!props.params.slug || typeof props.params.slug !== 'string') {
    throw new Error('props.params.slug is not have value or no string');
  }

  const { data, content } = getFile(
    clickedCategory.categoryName,
    props.params.slug,
  );

  return { props: { count, blogs, blogPost: { data: data, content } } };
};
