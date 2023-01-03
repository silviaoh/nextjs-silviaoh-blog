import React from 'react';
import styled from 'styled-components';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { FlexMixin } from '../styles/Common';
import { IPost } from '../types';

const PostView = (props: IPost) => {
  const { data, content } = props;

  return (
    <PrimaryMainLayout
      mainTitle={data.title}
      subTitle={
        <FooterSection color={data.tag.color || ''}>
          by <strong>{data.author}</strong> on
          <strong>{data.createdAt}</strong>
        </FooterSection>
      }
      categoryName={data.tag.name}
      tagColor={data.tag.color}
    >
      {content}
    </PrimaryMainLayout>
  );
};

export default PostView;

const FooterSection = styled.div`
  ${FlexMixin({ gap: '0.6rem' })}
  padding-top: 2rem;
  font-size: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  strong:first-child {
    font-weight: 600;
    text-decoration: underline;
  }

  strong:last-child {
    color: ${({ color }) => color};
  }
`;
