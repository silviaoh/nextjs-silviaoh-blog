import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { ChakraProvider } from '@chakra-ui/react';
import styled from 'styled-components';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import MDXComponents from '../components/markdown/MDXComponents';
import { FlexMixin } from '../styles/Common';
import { IPost } from '../types';

const PostView = (props: IPost) => {
  const { data, content } = props;

  return (
    <PrimaryMainLayout
      mainTitle={data.title}
      subTitle={
        <FooterSection color={data.tag.color || ''}>
          by<strong>{data.author}</strong>on
          <strong>{data.createdAt}</strong>
        </FooterSection>
      }
      categoryName={data.tag.name}
      tagColor={data.tag.color}
      isGridMode={false}
    >
      <ChakraProvider>
        <MDXRemote {...content} components={MDXComponents} />
      </ChakraProvider>
    </PrimaryMainLayout>
  );
};

export default PostView;

const FooterSection = styled.div`
  ${FlexMixin({ gap: '0.6rem' })}
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};

  > strong:first-child {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }

  > strong:last-child {
    color: ${({ color }) => color};
  }
`;
