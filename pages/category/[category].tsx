import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import PrimaryLayout from '../../src/components/layouts/PrimaryLayout';
import { IBlogList } from '../../src/types';
import { getDirectory, getFile } from '../../src/utils/mdxUtils';

import CategoryView from '../../src/views/CategoryView';

const Category = (props: IBlogList) => {
  return (
    <React.Fragment>
      <Head>
        <title>BLOG-Category</title>
      </Head>
      <PrimaryLayout {...props}>
        <CategoryView {...props} />
      </PrimaryLayout>
    </React.Fragment>
  );
};

export default Category;

export const getStaticPaths = async () => {
  const directories = getDirectory('') || [];

  const paths = directories.reduce((array: any, directory) => {
    return [
      ...array,
      {
        params: {
          category: directory.toString(),
        },
      },
    ];
  }, []);
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
