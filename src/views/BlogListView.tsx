import React from 'react';
import styled from 'styled-components';
import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { FlexMixin } from '../styles/Common';
import { IBlogList } from '../types';

const BlogView = (props: IBlogList) => {
  const { blogPostList } = props;

  console.log('props', blogPostList);

  return (
    <PrimaryLayout {...props}>
      <MainImageSection>
        <TitleH1>All History</TitleH1>
        <SubTitleH3>차곡차곡 담아두는 기록</SubTitleH3>
      </MainImageSection>
      <CardListSection>
        {blogPostList.map((post, postIdx) => {
          return post.files.map((file, fileIdx) => {
            return (
              <BlogPostCard key={`${postIdx}-${fileIdx}`} {...file.data} />
            );
          });
        })}
      </CardListSection>
    </PrimaryLayout>
  );
};

export default BlogView;

const MainImageSection = styled.section`
  ${FlexMixin({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
  })}
  position: relative;
  height: 33rem;
  background-image: url('/history.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &::before {
    position: absolute;
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
  }
`;

const TitleH1 = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

const SubTitleH3 = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

const CardListSection = styled.section`
  display: grid;
  padding: 6rem 8rem;
  justify-items: center;
  row-gap: 3rem;
  column-gap: 2rem;
  min-width: 50rem;

  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  }

  @media screen and (min-width: 1080px) and (max-width: 1350px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  }

  @media screen and (min-width: 870px) and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  }

  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
`;
