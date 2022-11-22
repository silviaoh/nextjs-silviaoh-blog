import Head from 'next/head';
import React from 'react';
import matter from 'gray-matter';
import { getDirectory, getFile } from '../src/utils/mdxUtils';
import BlogView from '../src/views/BlogView';

const BlogList = (props: any) => {
  return (
    <React.Fragment>
      <Head>
        <title>BLOG</title>
      </Head>
      <BlogView {...props} />
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
