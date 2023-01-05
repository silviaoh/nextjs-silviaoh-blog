import React from 'react';
import styled, { css } from 'styled-components';

import { FlexMixin, Paragraph } from '../../styles/Common';

interface IPrimaryMainLayoutProps {
  mainTitle: string;
  children: React.ReactNode;
  isGridMode: boolean;
  mainImageUrl?: string;
  subTitle?: string | React.ReactElement;
  categoryName?: string;
  tagColor?: string;
}

const PrimaryMainLayout = (props: IPrimaryMainLayoutProps) => {
  const {
    mainTitle,
    isGridMode,
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
        {subTitle && (
          <SubTitleP fontSize="1.6rem" color="white">
            {subTitle}
          </SubTitleP>
        )}
        {categoryName && (
          <CategorySpan tagColor={tagColor}>{categoryName}</CategorySpan>
        )}
      </MainImageSection>
      <CardListSection isGridMode={isGridMode}>{children}</CardListSection>
    </React.Fragment>
  );
};

export default PrimaryMainLayout;

const MainImageSection = styled.section<{ mainImageUrl: string }>`
  ${FlexMixin({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.6rem',
  })}
  position: relative;
  height: 46rem;
  background-image: ${({ mainImageUrl }) =>
    `url(${mainImageUrl ? mainImageUrl : '/images/common/history.jpg'})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &::before {
    position: absolute;
    content: '';
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }
`;

const TitleH1 = styled.h1`
  padding: 0 2rem;
  font-size: 4.4rem;
  color: ${({ theme }) => theme.colors.white};
  white-space: pre-line;
  text-align: center;
  z-index: 1;
`;

const SubTitleP = styled(Paragraph)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

const CategorySpan = styled.span<{ tagColor?: string }>`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ tagColor }) => tagColor};
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  z-index: 1;
`;

const CardListSection = styled.section<{ isGridMode: boolean }>`
  ${({ isGridMode }) => {
    if (isGridMode) {
      return css`
        display: grid;
        justify-items: center;
        row-gap: 3rem;
        column-gap: 1.6rem;
        padding: 8rem 12rem;

        @media screen and (min-width: 1480px) {
          grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
        }

        @media screen and (min-width: 1170px) and (max-width: 1480px) {
          grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        }

        @media screen and (min-width: 850px) and (max-width: 1170px) {
          grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
        }

        @media screen and (max-width: 850px) {
          grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
        }
      `;
    } else {
      return css`
        display: block;
        margin: 0 auto;
      `;
    }
  }};
`;
