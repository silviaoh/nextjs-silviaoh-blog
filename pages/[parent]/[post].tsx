import { GetStaticPaths, GetStaticProps } from 'next';
import styled from 'styled-components';
import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import { Highlights } from '../../src/components/common/Highlights';
import { Paragraph, ParagraphStyle } from '../../src/styles/Common';
import rehypeHighlight from 'rehype-highlight';

/**
 * fs : 파일 처리와 관련된 모듈
 * fs.readFileSync(filename, [options])동기적으로 filename의 파일을 options 방식으로 읽은 후 문자열 반환
 *
 */

const Post = (props: any) => {
  // MDXRemote 직렬화되어 보내진 mdxSource를 다시 html로 변환해줌.
  console.log('props', props);

  return (
    <Frame>
      <TitleWrapper>
        <Paragraph fontSize="1.4rem" fontWeight={600} color="deepDarkGray">
          {props.metaInfo.category}
        </Paragraph>
        <TitleH1 fontSize="4.2rem" color="black" fontWeight={600}>
          {props.metaInfo.title}
        </TitleH1>
        <Paragraph fontSize="1.4rem" color="deepDarkGray">
          {props.metaInfo.description}
        </Paragraph>
        <Paragraph fontSize="1.2rem" color="darkGray">
          {props.metaInfo.createAt}
        </Paragraph>
        <TagsWrapper>
          {props.metaInfo.tags.map((tag: any) => {
            return <Tag>{tag}</Tag>;
          })}
        </TagsWrapper>
      </TitleWrapper>
      <PostWrapper>
        <MDXRemote {...props.mdxSource} components={{ Highlights }} />
      </PostWrapper>
    </Frame>
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
  const mdxSource = await serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  return {
    props: {
      mdxSource,
      metaInfo: data,
    },
  };
};

//동적라우팅 + getStaticProps를 원할 때 사용합니다.
// export const getStaticPaths: GetStaticPaths = async () => {
//   let paths: any = [];
//   // 현재 경로 안에 있는 디렉토리를 읽어온다. (동기적으로)
//   fs.readdirSync(path.join(process.cwd(), 'contents')).forEach((parent) => {
//     fs.readdirSync(path.join(process.cwd(), `contents/${parent}`)).forEach(
//       (file) => {
//         paths.push({ params: { parent, post: file.replace('.mdx', '') } });
//       },
//     );
//   });

//   // 우리는 오로지 이 path들만 빌드타임에 프리렌더 함
//   // { fallback: false } 는 다른 routes들은 404임을 의미
//   // true이면 만들어지지 않은 것도 추후 요청이 들어오면 만들어 줄 거라는 뜻
//   //페이지가 동적 라우팅을 쓰고 있고, getStaticProps를 쓰는 경우, getStaticPaths을 통해 빌드 타임 때 정적으로 렌더링할 경로를 설정해야합니다. 여기서 정의하지 않은 하위 경로는 접근해도 화면이 뜨지 않습니다. 동적라우팅 할 때, 라우팅 되는 경우의 수를 하나하나 집어넣어야 합니다.
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Post;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 80vw;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 1px 4px 18px 0px rgba(58, 59, 59, 0.57);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  padding: 4rem 2rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray};

  * {
    text-align: center;
  }
`;

const TitleH1 = styled.h1`
  ${ParagraphStyle}
`;

const TagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.4rem;
`;

const Tag = styled.span`
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.purple};
  padding: 0.8rem 1.8rem;
  color: #fff;
  font-weight: 600;
`;

const PostWrapper = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  line-height: 1.6;

  * {
    font-size: 1.4rem;
  }

  ul > li {
    list-style-type: disc;
    list-style-position: inside;
    ol,
    ul {
      text-indent: 2rem;
    }
  }

  ol > li {
    list-style-type: decimal;
    list-style-position: inside;
    ol,
    ul {
      text-indent: 2rem;
    }
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 2.2rem;
  }

  h6 {
    font-size: 2rem;
  }
`;
