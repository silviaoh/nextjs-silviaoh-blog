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
import { IBlogPostData } from '../../types';
import Link from 'next/link';
import getTitlePathParam from '../../utils/getTitlePathParam';

const BlogPostCard = (props: IBlogPostData) => {
  const { thumbnailUrl, tag, title, description, author, createdAt } = props;

  const id = getTitlePathParam(title);

  console.log('id', id);
  return (
    <BlogPostCardArticle color={tag.color || ''}>
      <Link href={{ pathname: `/post/${id}` }}>
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
  position: relative;
  top: 0px;
  min-width: 31.2rem;
  max-width: 31.2rem;
  height: 38rem;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  > section {
    ${FlexMixin({
      flexDirection: 'column',
      justifyContent: 'space-between',
    })}
    height:100%;
  }

  &:hover {
    box-shadow: 0px 4px 6px rgba(38, 38, 38, 0.2);
    top: -4px;
  }

  @media screen and (max-width: 1045px) {
    max-width: 100%;
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
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

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
