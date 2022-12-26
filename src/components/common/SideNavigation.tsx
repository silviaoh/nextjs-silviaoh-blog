import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  faSeedling,
  faFeather,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RainbowBorderStyle, RainbowTextStyle } from '../../styles/Animation';
import { FlexWrapper, ImageBox, Paragraph } from '../../styles/Common';
import { IBlogListProps } from '../../types';

const SideNavProfile = () => {
  return (
    <React.Fragment>
      <ProfileImageBox width="10rem" height="10rem" borderRadius="10px">
        <Image
          src="/images/common/profile.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition={'center'}
        />
      </ProfileImageBox>
      <NicknameWrapper>
        <Paragraph fontSize="1.6rem" fontWeight={500}>
          silvia_oh_dev_story
        </Paragraph>
        <Paragraph fontSize="1.2rem" fontWeight={300}>
          🪴 성장하는 즐거움!
        </Paragraph>
      </NicknameWrapper>
    </React.Fragment>
  );
};

const SideNavigation = (props: IBlogListProps) => {
  const { blogs, count } = props;
  const router = useRouter();
  const query = router.query;

  const isAllPosts = !query.category;
  const isActiveCategoryPost = (activeCategory: string) =>
    query.category === activeCategory;

  return (
    <SideNavigationLayout>
      <SideNavTopImage />
      <SideNavProfile />
      <ul>
        <CategoryItem className={`category-all ${isAllPosts && 'active'}`}>
          <FontAwesomeIcon icon={faSeedling} width={12} />
          <Link href={{ pathname: '/' }}>All</Link>
          <span>{count}</span>
          <FontAwesomeIcon icon={faEllipsis} width={10} />
        </CategoryItem>
        {blogs?.map((post, postIdx) => {
          const pathname = `/category/${post.categoryName}`;
          const className = {
            categoryItem: `category-item ${
              isActiveCategoryPost(post.categoryName) && 'active'
            }`,
          };

          return (
            <Link key={postIdx} href={{ pathname }}>
              <CategoryItem className={className.categoryItem}>
                <FlexWrapper gap="0.6rem">
                  <FontAwesomeIcon icon={faFeather} width={9} />
                  <span>{post.categoryName}</span>
                </FlexWrapper>
                <GradientCircleBox>
                  <Paragraph fontSize="1rem" fontWeight={500}>
                    {post.count}
                  </Paragraph>
                </GradientCircleBox>
              </CategoryItem>
            </Link>
          );
        })}
      </ul>
    </SideNavigationLayout>
  );
};

export default SideNavigation;

const SideNavigationLayout = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #fff;

  box-shadow: 0px 0px 5px 0px rgba(168, 159, 253, 0.2);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(168, 159, 253, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(168, 159, 253, 0.2);
  z-index: 2;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 3rem;
  }
`;

const SideNavTopImage = styled.div`
  height: 100px;
  background-image: url('/images/common/sidenav.jpg');
  background-position: 57% 58%;
  background-attachment: scroll;
`;

const ProfileImageBox = styled(ImageBox)`
  position: absolute;
  top: calc(100px - 5rem);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 1px 4px 18px 0px rgba(58, 59, 59, 0.57);
`;

const GradientCircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;

  font-weight: 500;
  ${RainbowBorderStyle}

  > p {
    ${RainbowTextStyle}
    z-index: 1;
  }
`;

const NicknameWrapper = styled.div`
  margin-top: 8rem;

  > p {
    text-align: center;
  }

  > p:last-child {
    margin-top: 0.4rem;
  }
`;

export const CategoryItem = styled.li`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  > ul {
    width: 100%;
  }

  span {
    color: #333941;
    text-transform: uppercase;
  }

  &.category-all {
    font-weight: 300;
    font-size: 1.4rem;
    color: #fa82a8;

    > a {
      color: #fa82a8;
      text-decoration: none;
    }

    > span {
      ${RainbowTextStyle}
      animation: round 1s ease-in-out infinite, transformHue 3s infinite linear;
      animation-direction: alternate;
    }
  }

  &.all.active > a {
    font-weight: 600;
  }

  &.category-item {
    justify-content: space-between;
    border-left: 2px solid transparent;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0.6rem 1.6rem;
    width: 100%;
    font-weight: 400;
    font-size: 1.3rem;
    cursor: pointer;
    transition: border-width 0.3s linear, background-color 0.6s linear,
      font-weight 0.6s ease-in;
  }

  &.category-item:hover,
  &.category-item.active {
    color: #f9447d;
    border-left: 2px solid #f9447d;
    background-color: rgba(251, 224, 221, 0.4);

    span {
      color: #f9447d;
      font-weight: 600;
    }
  }

  @keyframes round {
    0% {
      transform: rotate(-10deg) scale(1);
    }
    100% {
      transform: rotate(10deg) scale(1.1);
    }
  }
`;
