import React, { useState } from 'react';
import styled from 'styled-components';
import { IBlogPostProps, IListOfBlogPostsProps } from '../../types';
import SideNavigation from '../common/SideNavigation';
import ProfileImageBox from '../profile/ProfileImageBox';

const PrimaryLayout = (props: IListOfBlogPostsProps | IBlogPostProps) => {
  const { children, categories } = props;

  const [isEnableSideNav, setIsEnableSideNav] = useState(false);
  const enableSideNav = () => setIsEnableSideNav(true);
  const disableSideNav = () => setIsEnableSideNav(false);

  return (
    <RootLayoutSection>
      {!isEnableSideNav && (
        <ProfileImageBox
          width="5rem"
          height="5rem"
          borderRadius="5px"
          enablePointer={true}
          positions={{ top: '1rem', left: '1rem' }}
          onClick={enableSideNav}
        />
      )}
      <SideNavigation
        categories={categories}
        isEnableSideNav={isEnableSideNav}
        disableSideNav={disableSideNav}
      />
      <Main>{children}</Main>
    </RootLayoutSection>
  );
};

export default PrimaryLayout;

const RootLayoutSection = styled.section`
  display: flex;

  > aside {
    flex-basis: 25rem;
  }

  > main {
    flex: 3;
  }
`;

const Main = styled.main`
  background-color: #fff;
  position: relative;
  height: 100vh;
  min-height: 100vh;
  min-width: 25rem;
  overflow: auto;
`;
