import React from 'react';
import styled from 'styled-components';
import SideNavigation from '../common/SideNavigation';

const PrimaryLayout = (props: any) => {
  const { children, blogs, count } = props;

  return (
    <RootLayoutSection>
      <SideNavigation blogs={blogs} count={count} />
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
