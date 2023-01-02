import React from 'react';
import styled from 'styled-components';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { FlexMixin } from '../styles/Common';
import { IFilesInCategory } from '../types';

const PostView = (props: IFilesInCategory) => {
  const { metaData, content } = props;

  return (
    <PrimaryMainLayout
      mainTitle={metaData.title}
      subTitle={
        <FooterSection color={metaData.tag.color || ''}>
          by <strong>{metaData.author}</strong> on
          <strong>{metaData.createdAt}</strong>
        </FooterSection>
      }
      category={metaData.tag.name}
      tagColor={metaData.tag.color}
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
