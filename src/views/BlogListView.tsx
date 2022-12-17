import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import BlogPostCard from '../components/card/BlogPostCard';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { FlexMixin } from '../styles/Common';
import { IBlogList } from '../types';

const BlogView = (props: IBlogList) => {
  const { blogPostList } = props;
  const router = useRouter();
  const query = router.query;

  const mainTitle = query.tag || 'All History';
  const mainSubtitle = !!query.tag ? '' : '차곡차곡 담아두는 기록';

  return (
    <PrimaryLayout {...props}>
      <MainImageSection>
        <TitleH1>{mainTitle}</TitleH1>
        <SubTitleH3>{mainSubtitle}</SubTitleH3>
      </MainImageSection>
      <CardListSection>
        {blogPostList.map((post, postIdx) => {
          return post.files.map((file, fileIdx) => {
            return (
              post.categoryName === query.tag && (
                <BlogPostCard key={`${postIdx}-${fileIdx}`} {...file.data} />
              )
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
  text-transform: uppercase;
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
  column-gap: 4rem;
  min-width: 50rem;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));

  @media screen and (min-width: 1210px) {
  }

  @media screen and (min-width: 1045px) and (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, auto));
  }

  @media screen and (max-width: 1045px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }

  @media screen and (max-width: 870px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }
`;
