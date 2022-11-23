import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { FlexMixin, ImageBox, Paragraph } from '../../styles/Common';

interface IBlogPostCardProps {
  tag: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  thumbnailUrl?: string;
}

const BlogPostCard = (props: IBlogPostCardProps) => {
  const { thumbnailUrl, tag, title, description, author, createdAt } = props;
  return (
    <BlogPostCardArticle>
      <section>
        {thumbnailUrl && (
          <ImageBox width="100%" height="14rem">
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
          <TagSpan>{tag}</TagSpan>
          <TitleH1>{title}</TitleH1>
          <Paragraph fontSize="1.3rem">{description}</Paragraph>
        </ContentSection>
      </section>
      <FooterSection>
        by <strong>{author}</strong> on
        <strong>{createdAt}</strong>
      </FooterSection>
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
  height: 30.2rem;
  box-shadow: 3px 5px 8px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
`;

const ContentSection = styled.section`
  ${FlexMixin({
    flexDirection: 'column',
    gap: '1rem',
  })}
  padding: 2rem;
`;

const TagSpan = styled.span`
  font-size: 1.4rem;
`;

const TitleH1 = styled.h1`
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
    color: red;
  }
`;

const AuthorH1 = styled.h1`
  width: fit-content;
  font-weight: 600;
`;

const CreatedAtH1 = styled.h1`
  width: fit-content;
  font-weight: 600;
`;
