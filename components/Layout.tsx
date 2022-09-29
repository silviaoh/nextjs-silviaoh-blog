import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper, ImageWrapper, Paragraph } from '../styles/common-style';
import Image from 'next/image';
import profileImg from '../public/images/profile.jpeg';
import sideNavBackgroundImg from '/public/images/sidenav.jpg';
import { RainbowBorderStyle, RainbowTextStyle } from '../styles/animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrown,
  faSeedling,
  faBook,
  faFeather,
} from '@fortawesome/free-solid-svg-icons';

const Layout = (props: any) => {
  const { children, posts, sideNavCategories } = props;
  const [selectedCategory, setSelectedCategory] = useState('all');
  // console.log('posts', posts);
  console.log(sideNavCategories);
  console.log('posts', posts);

  const [openedCategories, setOpenedCategories] = useState<any>([]);

  console.log('openedCategories', openedCategories);

  return (
    <Frame>
      <CategoryFrame>
        <SideNavTopImage src={sideNavBackgroundImg} />
        <ProfileImageWrapper width="10rem" height="10rem" borderRadius="10px">
          <Image
            src={profileImg}
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
          <CategoryWrapper
            className="all"
            onClick={() => setSelectedCategory('all')}
          >
            <FontAwesomeIcon icon={faSeedling} width={12} /> All
            <span>{posts.length}</span>
          </CategoryWrapper>
          {sideNavCategories?.map((largeCategory: any, largeIdx: number) => {
            return (
              <React.Fragment>
                <CategoryWrapper className="large--category-wrapper">
                  ‥‥
                  <Paragraph fontSize="1.3rem" fontWeight={500}>
                    {largeCategory.name}
                  </Paragraph>
                </CategoryWrapper>
                {largeCategory.children?.length > 0 && (
                  <CategoryWrapper>
                    <UnorderList>
                      {largeCategory.children.map(
                        (mediumCategory: any, mediumIdx: number) => {
                          const mediumCount = posts.filter(
                            (post: any) =>
                              post.categories.medium === mediumCategory.name,
                          ).length;

                          return (
                            <React.Fragment>
                              <CategoryWrapper
                                className={`medium--category-wrapper ${
                                  openedCategories.includes(
                                    mediumCategory.name,
                                  ) && 'active'
                                }`}
                                onClick={() => {
                                  if (
                                    openedCategories.includes(
                                      mediumCategory.name,
                                    )
                                  ) {
                                    setOpenedCategories(
                                      openedCategories.filter(
                                        (category: any) =>
                                          category !== mediumCategory.name,
                                      ),
                                    );
                                  } else {
                                    setOpenedCategories([
                                      ...openedCategories,
                                      mediumCategory.name,
                                    ]);
                                  }
                                }}
                              >
                                <FlexWrapper gap="0.6rem">
                                  <FontAwesomeIcon icon={faBook} width={12} />
                                  <span>{mediumCategory.name}</span>
                                </FlexWrapper>

                                <RoundDiv>
                                  <Paragraph fontSize="1rem" fontWeight={500}>
                                    {mediumCount}
                                  </Paragraph>
                                </RoundDiv>
                              </CategoryWrapper>

                              {mediumCategory.children?.length > 0 &&
                                openedCategories.includes(
                                  mediumCategory.name,
                                ) && (
                                  <CategoryWrapper>
                                    <UnorderList>
                                      {mediumCategory.children.map(
                                        (
                                          smallCategory: any,
                                          smallIdx: number,
                                        ) => {
                                          const smallCount = posts.filter(
                                            (post: any) =>
                                              post.categories.small ===
                                              smallCategory.name,
                                          ).length;
                                          return (
                                            <React.Fragment>
                                              <CategoryWrapper className="small--category-wrapper">
                                                <FlexWrapper gap="0.6rem">
                                                  <FontAwesomeIcon
                                                    icon={faBook}
                                                    width={12}
                                                  />
                                                  <span>
                                                    {smallCategory.name}
                                                  </span>
                                                </FlexWrapper>

                                                <RoundDiv>
                                                  <Paragraph
                                                    fontSize="1rem"
                                                    fontWeight={500}
                                                  >
                                                    {mediumCount}
                                                  </Paragraph>
                                                </RoundDiv>
                                              </CategoryWrapper>
                                            </React.Fragment>
                                          );
                                        },
                                      )}
                                    </UnorderList>
                                  </CategoryWrapper>
                                )}
                            </React.Fragment>
                          );
                        },
                      )}
                    </UnorderList>
                  </CategoryWrapper>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </CategoryFrame>
      <Main>{children}</Main>
    </Frame>
  );
};

export default Layout;

const Frame = styled.section`
  display: flex;

  * {
    font-family: 'EF_Diary', sans-serif;
  }

  > aside {
    flex-basis: 250px;
  }

  > main {
    flex: 3;
  }
`;

const Main = styled.main`
  background-color: #fff;
  position: relative;
  height: 100%;
`;

const SideNavTopImage = styled.div<{ src: any }>`
  height: 100px;
  background-image: url(${({ src }) => src.src});
  background-position: 57% 58%;
  background-attachment: scroll;
`;

const CategoryFrame = styled.aside`
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
    gap: 1.4rem;
    padding: 3rem;
  }
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

const UnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CategoryWrapper = styled.li`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  > ul {
    width: 100%;
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

  span {
    color: #333941;
  }

  &.medium--category-wrapper {
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

  &.medium--category-wrapper:hover,
  .active {
    border-left: 2px solid #f9447d;
    background-color: rgba(251, 224, 221, 0.4);
  }

  &.small--category-wrapper:hover {
    border-radius: 6px;
    background-color: rgba(251, 224, 221, 0.4);
  }

  &.small--category-wrapper {
    justify-content: space-between;
    gap: 1.2rem;
    padding: 0.6rem 1.6rem;
    font-size: 1.3rem;
    border-left: 2px solid transparent;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-left: 1.6rem;
    cursor: pointer !important;
    transition: border-width 0.3s linear, background-color 0.6s linear;
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
