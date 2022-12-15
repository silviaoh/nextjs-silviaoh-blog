import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import {
  ImageBox,
  MultiLineEllepsisStyle,
  Paragraph,
  FlexMixin,
  SingleLineEllepsisMixin,
} from '../../styles/Common';
import { IStaticPostListData } from '../../types';
import Link from 'next/link';

const BlogPostCard = (props: IStaticPostListData) => {
  const { thumbnailUrl, tag, title, description, author, createdAt } = props;

  return (
    <BlogPostCardArticle>
      <Link href={{ pathname: `/blog/` }}>
        <section>
          <section>
            {thumbnailUrl && (
              <ImageBox width="100%" height="14rem" borderRadius="5px">
                <Image
                  src={thumbnailUrl}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="thumbnail"
                />
              </ImageBox>
            )}
            <ContentSection>
              <TagSpan color={tag.color || ''}>{tag.name}</TagSpan>
              <TitleH1>{title}</TitleH1>
              <DescriptionP fontSize="1.3rem">{description}</DescriptionP>
            </ContentSection>
          </section>
          <FooterSection color={tag.color || ''}>
            by <strong>{author}</strong> on
            <strong>{createdAt}</strong>
          </FooterSection>
        </section>
      </Link>
    </BlogPostCardArticle>
  );
};

export default BlogPostCard;

const BlogPostCardArticle = styled.article`
  ${FlexMixin({
    flexDirection: 'column',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 38rem;
  box-shadow: 3px 5px 8px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  cursor: pointer;

  > section {
    ${FlexMixin({
      flexDirection: 'column',
      justifyContent: 'space-between',
    })}
    height:100%;
  }
`;

const ContentSection = styled.section`
  ${FlexMixin({
    flexDirection: 'column',
    gap: '1rem',
  })}
  padding: 2rem;
`;

const TagSpan = styled.span`
  width: fit-content;
  font-size: 1rem;
  font-weight: 400;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  padding: 0.4rem 1rem;
  color: white;
`;

const TitleH1 = styled.h1`
  ${SingleLineEllepsisMixin('26rem')}
  font-size: 1.6rem;
`;

const FooterSection = styled.div`
  ${FlexMixin({ gap: '0.6rem' })}
  padding: 2rem;
  font-size: 1.3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};

  strong:first-child {
    font-weight: 600;
    text-decoration: underline;
  }

  strong:last-child {
    color: ${({ color }) => color};
  }
`;

const DescriptionP = styled(Paragraph)`
  ${MultiLineEllepsisStyle}
`;
