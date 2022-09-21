import styled from 'styled-components';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {
  ImageWrapper,
  Paragraph,
  ParagraphStyle,
} from '../styles/common-style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const Blog = (props: any) => {
  const router = useRouter();

  const { posts } = props;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [postsState, setPostsState] = useState(posts);

  useEffect(() => {
    setPostsState(
      selectedCategory === 'all'
        ? posts
        : posts.filter((post: any) => post.category === selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <React.Fragment>
      <Head>
        <title>BLOG</title>
      </Head>

      <MainFrame>
        {/* <MainWrapper onClick={() => router.push(`/${postsState[0].url}`)}>
          {postsState[0].metaInfo.thumbnail && (
            <ImageWrapper width="100%" height="25.916rem" borderRadius="5px">
              <Image
                src={posts[0].metaInfo.thumbnail}
                layout="fill"
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </ImageWrapper>
          )}
          <BlogPostInfoWrapper>
            <Paragraph
              fontSize="1.2rem"
              color="darkGray"
              fontWeight={600}
              margin="1rem 0 0 0"
            >
              {postsState[0].metaInfo.createAt}
            </Paragraph>
            <TitleH fontSize="2.2rem" color="black" fontWeight={600}>
              {postsState[0].metaInfo.title}
            </TitleH>
            <Paragraph fontSize="1.4rem" color="deepDarkGray">
              {postsState[0].metaInfo.description}
            </Paragraph>
          </BlogPostInfoWrapper>
        </MainWrapper>
        <PostWrapper>
          {postsState
            .filter((_: any, idx: number) => idx > 0)
            .map((post: any, idx: number) => (
              <PostCardWrapper
                key={`${post.metaInfo.title}-${idx}`}
                onClick={() => router.push(`/${post.url}`)}
              >
                {post.metaInfo.thumbnail && (
                  <ImageWrapper width="100%" height="15rem" borderRadius="5px">
                    <Image
                      src={post.metaInfo.thumbnail}
                      layout="fill"
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </ImageWrapper>
                )}
                <BlogPostInfoWrapper>
                  <Paragraph
                    fontSize="1.2rem"
                    color="darkGray"
                    fontWeight={600}
                    margin="1rem 0 0 0"
                  >
                    {post.metaInfo.createAt}
                  </Paragraph>
                  <TitleH fontSize="1.8rem" color="black" fontWeight={600}>
                    {post.metaInfo.title}
                  </TitleH>
                  <Paragraph fontSize="1.4rem" color="deepDarkGray">
                    {post.metaInfo.description}
                  </Paragraph>
                </BlogPostInfoWrapper>
              </PostCardWrapper>
            ))}
        </PostWrapper> */}
      </MainFrame>
    </React.Fragment>
  );
};
// [{}]
export const getStaticProps: GetStaticProps = async () => {
  const folderPath = path.join(process.cwd(), 'contents');
  let posts: any = [];
  let categories: any = [];
  // fs.readdirSync(folderPath).forEach((parent: any) => {
  //   categories.push(parent);
  //   fs.readdirSync(path.join(process.cwd(), `contents/${parent}`)).forEach(
  //     (file) => {
  //       const filePath = path.join(folderPath, `${parent}/${file}`);
  //       const rawFileSource = fs.readFileSync(filePath);
  //       const { content, data } = matter(rawFileSource);

  //       posts.push({
  //         category: parent,
  //         metaInfo: data,
  //         content,
  //         url: `${parent}/${file.replace('.mdx', '')}`,
  //       });
  //     },
  //   );
  // });

  return {
    props: { posts: [] },
  };
};

export default Blog;

const MainFrame = styled.section`
  padding: 5rem;
`;

const MainWrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 5px;
  gap: 1rem;
  min-height: 20rem;
  cursor: pointer;

  > div:first-child {
    flex: 1 1 60%;
  }

  > div:last-child {
    flex: 1 1 40%;
  }
`;

const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 4rem;
`;

const PostCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex: 0 1 calc((76.8rem - 2.8rem) / 3);
  min-height: 24rem;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const BlogPostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1rem 1rem 1rem;
`;

const TitleH = styled.h1`
  ${ParagraphStyle}
`;
