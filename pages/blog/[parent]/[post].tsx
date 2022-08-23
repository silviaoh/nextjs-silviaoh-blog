import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

const Post = (props: any) => {
  return <MDXRemote {...props.mdxSource} />;
};

export const getStaticProps: GetStaticProps = async (props: any) => {
  const { params } = props;

  // process.cwd 현재 절대경로 + /content
  const folderPath = path.join(process.cwd(), `contents/${params.parent}`);
  const filePath = path.join(folderPath, `${params.post}.mdx`);
  console.log('file', filePath);

  // return Buffer
  const rawFileSource = fs.readFileSync(filePath);
  // mdx 파일에서 --- 안에 있는 메타 내용과 블로그 내용 추출
  const { content, data } = matter(rawFileSource);
  // markdown 적용
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (a) => {
  let paths: any = [];
  fs.readdirSync(path.join(process.cwd(), 'contents')).forEach((parent) => {
    fs.readdirSync(path.join(process.cwd(), `contents/${parent}`)).forEach(
      (file) => {
        paths.push({ params: { parent, post: file.replace('.mdx', '') } });
      },
    );
  });

  return {
    paths,
    fallback: false,
  };
};

export default Post;
