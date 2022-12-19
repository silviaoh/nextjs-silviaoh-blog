import React from 'react';
import styled from 'styled-components';

import { FlexMixin } from '../../styles/Common';

interface IPrimaryBlogListLayoutProps {
  mainTitle: string;
  children: React.ReactNode;
  mainImageUrl?: string;
  subTitle?: string;
}

const PrimaryBlogListLayout = (props: IPrimaryBlogListLayoutProps) => {
  const { mainTitle, children, mainImageUrl = '', subTitle = '' } = props;

  return (
    <React.Fragment>
      <MainImageSection mainImageUrl={mainImageUrl}>
        <TitleH1>{mainTitle}</TitleH1>
        {subTitle && <SubTitleH3>{subTitle}</SubTitleH3>}
      </MainImageSection>
      <CardListSection>{children}</CardListSection>
    </React.Fragment>
  );
};

export default PrimaryBlogListLayout;

const MainImageSection = styled.section<{ mainImageUrl: string }>`
  ${FlexMixin({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
  })}
  position: relative;
  height: 33rem;
  background-image: ${({ mainImageUrl }) =>
    `url(${mainImageUrl ? mainImageUrl : '/history.jpg'})`};
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
