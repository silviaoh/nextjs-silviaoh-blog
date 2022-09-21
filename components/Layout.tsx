import React, { useState } from 'react';
import styled from 'styled-components';
import { ImageWrapper, Paragraph } from '../styles/common-style';
import Image from 'next/image';
import profileImg from '../public/images/profile.jpeg';
import sideNavBackgroundImg from '/public/images/sidenav.jpg';

const Layout = (props: any) => {
  const { children, posts, sideNavCategories } = props;
  const [selectedCategory, setSelectedCategory] = useState('all');
  console.log('posts', posts);
  console.log('sideNavCategories', sideNavCategories);
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
          <CategoryWrapper onClick={() => setSelectedCategory('all')}>
            전체
          </CategoryWrapper>
          {/* {categories?.map((category: any, idx: number) => {
            return (
              <CategoryWrapper
                key={idx}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CategoryWrapper>
            );
          })} */}
        </ul>
      </CategoryFrame>
      <Main>{children}</Main>
    </Frame>
  );
};

export default Layout;

const Frame = styled.section`
  display: flex;

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

  box-shadow: 0px 0px 5px 0px rgba(148, 167, 223, 0.4);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(148, 167, 223, 0.4);
  -moz-box-shadow: 0px 0px 5px 0px rgba(148, 167, 223, 0.4);

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
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
`;
