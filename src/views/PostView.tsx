import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { FlexMixin } from '../styles/Common';
import { IPost } from '../types';
import { Prose, withProse } from '@nikolovlazar/chakra-ui-prose';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme(
  {},
  withProse({
    baseStyle: {
      h2: {
        fontWeight: 'light',
      },
    },
  }),
);

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
      <ChakraProvider theme={theme}>
        <Prose>
          <MDXRemote {...content} />
        </Prose>
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
