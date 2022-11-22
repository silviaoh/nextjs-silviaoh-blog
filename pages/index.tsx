import React from 'react';
import Head from 'next/head';
import matter from 'gray-matter';

import BlogListView from '../src/views/BlogListView';
import { getDirectory, getFile } from '../src/utils/mdxUtils';

interface IStaticPostListData {
  title: string;
  createAt: string;
  thumbnail: string;
  tags: string[];
  description: string;
  author: string;
}

interface IStaticPostList {
  data: IStaticPostListData;
  content: string;
}

interface IBlogList {
  categoryName: string;
  blogPostList: IStaticPostList[];
  count: number;
}

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

  console.log('blogPostList', blogPostList[0].files);

  const allBlogPostCount = blogPostList.reduce(
    (count: number, currPost: any) => count + currPost.count,
    0,
  );
  return { props: { count: allBlogPostCount, blogPostList } };
};
