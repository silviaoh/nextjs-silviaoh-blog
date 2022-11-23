import React from 'react';
import Head from 'next/head';
import matter from 'gray-matter';

import BlogListView from '../src/views/BlogListView';
import { getDirectory, getFile } from '../src/utils/mdxUtils';
import { IBlogList } from '../src/types';

const BlogList = (props: IBlogList) => {
  return (
    <React.Fragment>
      <Head>
        <title>BLOG</title>
      </Head>
      <BlogListView {...props} />
    </React.Fragment>
  );
};
export default BlogList;

export const getStaticProps = async () => {
  const directories = getDirectory('') || [];

  const blogPostList = directories.reduce((array: any, directory) => {
    const files = getDirectory(directory)?.reduce((filesArray: any, file) => {
      const source = getFile(directory, file.replace('.mdx', ''));

      const { content, data } = matter(source);
      return [
        ...filesArray,
        {
          data,
          content,
        },
      ];
    }, []);

    return [
      ...array,
      {
        categoryName: directory,
        files,
        count: files.length,
      },
    ];
  }, []);

  const allBlogPostCount = blogPostList.reduce(
    (count: number, currPost: any) => count + currPost.count,
    0,
  );
  return { props: { count: allBlogPostCount, blogPostList } };
};
