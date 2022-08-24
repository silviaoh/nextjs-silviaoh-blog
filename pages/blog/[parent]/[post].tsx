import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import { Highlights } from '../../../components/Highlights';

/**
 * fs : 파일 처리와 관련된 모듈
 * fs.readFileSync(filename, [options])동기적으로 filename의 파일을 options 방식으로 읽은 후 문자열 반환
 *
 */

const Post = (props: any) => {
  // MDXRemote 직렬화되어 보내진 mdxSource를 다시 html로 변환해줌.
  console.log('props', props);
  return (
    <React.Fragment>
      <MDXRemote {...props.mdxSource} components={{ Highlights }} />
    </React.Fragment>
  );
};

// 빌드시 고정되는 값으로 빌드 이후에는 수정이 불가능합니다.
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
      metaInfo: data,
    },
  };
};

//동적라우팅 + getStaticProps를 원할 때 사용합니다.
export const getStaticPaths: GetStaticPaths = async () => {
  let paths: any = [];
  // 현재 경로 안에 있는 디렉토리를 읽어온다. (동기적으로)
  fs.readdirSync(path.join(process.cwd(), 'contents')).forEach((parent) => {
    fs.readdirSync(path.join(process.cwd(), `contents/${parent}`)).forEach(
      (file) => {
        paths.push({ params: { parent, post: file.replace('.mdx', '') } });
      },
    );
  });

  // 우리는 오로지 이 path들만 빌드타임에 프리렌더 함
  // { fallback: false } 는 다른 routes들은 404임을 의미
  // true이면 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 거라는 뜻
  //페이지가 동적 라우팅을 쓰고 있고, getStaticProps를 쓰는 경우, getStaticPaths을 통해 빌드 타임 때 정적으로 렌더링할 경로를 설정해야합니다. 여기서 정의하지 않은 하위 경로는 접근해도 화면이 뜨지 않습니다. 동적라우팅 할 때, 라우팅 되는 경우의 수를 하나하나 집어넣어야 합니다.
  return {
    paths,
    fallback: false,
  };
};

export default Post;
