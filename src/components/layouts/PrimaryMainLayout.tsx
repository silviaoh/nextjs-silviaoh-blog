import React from 'react';
import styled from 'styled-components';

import { FlexMixin } from '../../styles/Common';

interface IPrimaryMainLayoutProps {
  mainTitle: string;
  children: React.ReactNode;
  mainImageUrl?: string;
  subTitle?: string | React.ReactElement;
  categoryName?: string;
  tagColor?: string;
}

const PrimaryMainLayout = (props: IPrimaryMainLayoutProps) => {
  const {
    mainTitle,
    children,
    mainImageUrl = '',
    subTitle = '',
    categoryName = '',
    tagColor = '',
  } = props;

  return (
    <React.Fragment>
      <MainImageSection mainImageUrl={mainImageUrl}>
        <TitleH1>{mainTitle}</TitleH1>
        {subTitle && <SubTitleH3>{subTitle}</SubTitleH3>}
        {categoryName && (
          <CategorySpan tagColor={tagColor}>{categoryName}</CategorySpan>
        )}
      </MainImageSection>
      <CardListSection>{children}</CardListSection>
    </React.Fragment>
  );
};

export default PrimaryMainLayout;

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
    `url(${mainImageUrl ? mainImageUrl : '/images/common/history.jpg'})`};
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
  padding: 0 2rem;
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.white};
  white-space: pre-line;
  min-height: 12rem;
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
`;

const SubTitleH3 = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

const CategorySpan = styled.span<{ tagColor?: string }>`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ tagColor }) => tagColor};
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
