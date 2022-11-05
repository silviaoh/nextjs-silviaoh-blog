import styled from 'styled-components';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {
  ImageWrapper,
  Paragraph,
  ParagraphStyle,
} from '../components/common/Common.style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import RootLayout from '../components/layout/RootLayout';
import { getFileBySlug, getFiles } from '../utils/mdxUtils';

const Blog = (props: any) => {
  console.log('props', props);
  // const router = useRouter();

  // const { posts } = props;
  // const [selectedCategory, setSelectedCategory] = useState('all');
  // const [postsState, setPostsState] = useState(posts);

  // useEffect(() => {
  //   setPostsState(
  //     selectedCategory === 'all'
  //       ? posts
  //       : posts.filter((post: any) => post.category === selectedCategory),
  //   );
  // }, [selectedCategory]);

  return (
    <React.Fragment>
      <Head>
        <title>BLOG</title>
      </Head>

      <RootLayout {...props}></RootLayout>
    </React.Fragment>
  );
};
// [{}]
export const getStaticProps = async () => {
  const directories = getFiles('') || [];

  const blogPostList = directories.reduce((array: any, directory) => {
    const files = getFiles(directory)?.reduce((filesArray: any, file) => {
      const source = getFileBySlug(directory, file.replace('.mdx', ''));
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

export default Blog;

const MainFrame = styled.section`
  padding: 5rem;
`;
