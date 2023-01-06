import React from 'react';
import styled from 'styled-components';
import PrimaryMainLayout from '../components/layouts/PrimaryMainLayout';
import { FlexMixin } from '../styles/Common';
import { IPost } from '../types';

// TODO NEXT/mdx 시도해볼까?
// 스타일링 하는 법 알기
// 스타일 해야 하는 태그들 정리하기
// 스타일을 좀 더 간단히 적용할 수 있는 방법은 없는지

const PostView = (props: IPost) => {
  const { data, content } = props;

  return (
    <PrimaryMainLayout
      mainTitle={data.title}
      subTitle={
        <FooterSection color={data.tag.color || ''}>
          by<span>{data.author}</span>on
          <span>{data.createdAt}</span>
        </FooterSection>
      }
      categoryName={data.tag.name}
      tagColor={data.tag.color}
      isGridMode
    >
      {content}
    </PrimaryMainLayout>
  );
};

export default PostView;

const FooterSection = styled.div`
  ${FlexMixin({ gap: '0.6rem' })}
  padding-top: 3.6rem;
  font-size: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  > span:first-child {
    text-decoration: underline;
  }

  > span:last-child {
    color: ${({ color }) => color};
  }
`;
