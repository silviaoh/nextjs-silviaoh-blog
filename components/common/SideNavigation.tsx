import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import sideNavBackgroundImg from '/public/images/sidenav.jpg';
import { RainbowBorderStyle, RainbowTextStyle } from './Animation.style';
import { FlexWrapper, ImageWrapper, Paragraph } from './Common.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faFeather } from '@fortawesome/free-solid-svg-icons';

const SideNavigation = (props: any) => {
  const { blogPostList, count } = props;
  return (
    <SideNavigationLayout>
      <SideNavTopImage src={sideNavBackgroundImg} />
      <ProfileImageWrapper width="10rem" height="10rem" borderRadius="10px">
        <Image
          src="/images/profile.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition={'center'}
        />
      </ProfileImageWrapper>
      <NicknameWrapper>
        <Paragraph fontSize="1.6rem" fontWeight={500}>
          silvia_oh_dev_story
        </Paragraph>
        <Paragraph fontSize="1.2rem" fontWeight={300}>
          🪴 성장하는 즐거움!
        </Paragraph>
      </NicknameWrapper>
      <ul>
        <CategoryWrapper className="all">
          <FontAwesomeIcon icon={faSeedling} width={12} /> All
          <span>{count}</span>
        </CategoryWrapper>
        {blogPostList?.map((post: any) => {
          return (
            <React.Fragment>
              {/* <CategoryWrapper className="large--category-wrapper">
                  ‥‥
                  <Paragraph fontSize="1.3rem" fontWeight={500}>
                    {post.categoryName}
                  </Paragraph>
                </CategoryWrapper> */}
              <CategoryWrapper className="category-wrapper">
                <FlexWrapper gap="0.6rem">
                  <FontAwesomeIcon icon={faFeather} width={12} />
                  <span>{post.categoryName}</span>
                </FlexWrapper>
                <RoundDiv>
                  <Paragraph fontSize="1rem" fontWeight={500}>
                    {post.count}
                  </Paragraph>
                </RoundDiv>
              </CategoryWrapper>
            </React.Fragment>
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

  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 3rem;
  }
`;

const SideNavTopImage = styled.div<{ src: any }>`
  height: 100px;
  background-image: url(${({ src }) => src.src});
  background-position: 57% 58%;
  background-attachment: scroll;
`;

const ProfileImageWrapper = styled(ImageWrapper)`
  position: absolute;
  top: calc(100px - 5rem);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 1px 4px 18px 0px rgba(58, 59, 59, 0.57);
`;

const RoundDiv = styled.div`
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
  margin-top: 7rem;

  > p {
    text-align: center;
  }

  > p:last-child {
    margin-top: 0.4rem;
  }
`;

export const CategoryWrapper = styled.li`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  > ul {
    width: 100%;
  }

  span {
    color: #333941;
  }

  &.all {
    font-weight: 300;
    font-size: 1.4rem;
    color: #fa82a8;

    > span {
      ${RainbowTextStyle}
      animation: round 1s ease-in-out infinite, transformHue 3s infinite linear;
      animation-direction: alternate;
    }
  }

  &.category-wrapper {
    justify-content: space-between;
    border-left: 2px solid transparent;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0.6rem 1.6rem;
    width: 100%;
    font-weight: 400;
    font-size: 1.3rem;
    cursor: pointer;
    transition: border-width 0.3s linear, background-color 0.6s linear;
  }

  &.category-wrapper:hover,
  .active {
    border-left: 2px solid #f9447d;
    background-color: rgba(251, 224, 221, 0.4);
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
