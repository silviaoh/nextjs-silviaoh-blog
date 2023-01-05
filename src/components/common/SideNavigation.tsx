import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  faSeedling,
  faFeather,
  faEllipsis,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { RainbowBorderStyle, RainbowTextStyle } from '../../styles/Animation';
import { FlexBox, Paragraph } from '../../styles/Common';
import { ICategories } from '../../types';
import ProfileImageBox from '../profile/ProfileImageBox';

const SideNavProfile = () => {
  return (
    <React.Fragment>
      <ProfileImageBox
        width="10rem"
        height="10rem"
        borderRadius="10px"
        enablePointer={false}
        positions={{ top: 'calc(100px - 5rem)', left: '50%' }}
        transform="translateX(-50%)"
      />
      <NicknameBox>
        <Paragraph fontSize="1.6rem" fontWeight={500}>
          silvia_oh_dev_story
        </Paragraph>
        <Paragraph fontSize="1.2rem" fontWeight={300}>
          🪴 성장하는 즐거움!
        </Paragraph>
      </NicknameBox>
    </React.Fragment>
  );
};

const SideNavigation = (props: {
  categories: ICategories[];
  isEnableSideNav: boolean;
  disableSideNav: () => void;
}) => {
  const { categories, isEnableSideNav, disableSideNav } = props;
  const router = useRouter();
  const query = router.query;

  const isAllPosts = !query.categoryName;
  const isActiveCategoryPost = (activeCategory: string) =>
    query.categoryName === activeCategory;

  return (
    <SideNavigationLayout isEnableSideNav={isEnableSideNav}>
      <FontAwesomeIcon
        icon={faClose}
        className="fa-close"
        onClick={disableSideNav}
      />
      <SideNavTopImage />
      <SideNavProfile />
      <ul>
        {categories?.map((categoryItem, categoryIdx) => {
          const pathname = `/category/${categoryItem.categoryName}`;
          const className = {
            categoryItem: `category-item ${
              isActiveCategoryPost(categoryItem.categoryName) && 'active'
            }`,
          };

          return (
            <Link key={categoryIdx} href={{ pathname }}>
              {categoryItem.categoryName === 'All' ? (
                <CategoryItem
                  className={`category-all ${isAllPosts && 'active'}`}
                >
                  <FontAwesomeIcon icon={faSeedling} width={12} />
                  <Link href={{ pathname: '/' }}>All</Link>
                  <span>{categoryItem.count}</span>
                  <FontAwesomeIcon icon={faEllipsis} width={10} />
                </CategoryItem>
              ) : (
                <CategoryItem className={className.categoryItem}>
                  <FlexBox gap="0.6rem">
                    <FontAwesomeIcon icon={faFeather} width={9} />
                    <span>{categoryItem.categoryName}</span>
                  </FlexBox>
                  <GradientCircleBox>
                    <Paragraph fontSize="1rem" fontWeight={500}>
                      {categoryItem.count}
                    </Paragraph>
                  </GradientCircleBox>
                </CategoryItem>
              )}
            </Link>
          );
        })}
      </ul>
    </SideNavigationLayout>
  );
};

export default SideNavigation;

const SideNavigationLayout = styled.aside<{ isEnableSideNav: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isEnableSideNav }) => (isEnableSideNav ? '0' : '-25rem')};
  width: 25rem;
  height: 100vh;
  background-color: #fff;
  transition: left 0.3s ease-in-out;
  box-shadow: 0px 0px 5px 0px rgba(168, 159, 253, 0.2);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(168, 159, 253, 0.2);
  -moz-box-shadow: 0px 0px 5px 0px rgba(168, 159, 253, 0.2);
  z-index: 2;

  .fa-close {
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    margin: 1rem;
    right: 0;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

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

const NicknameBox = styled.div`
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
