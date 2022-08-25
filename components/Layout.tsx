import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import styled from 'styled-components';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <Frame>
      <LayoutWrapper>
        <Navigation />
        <Main>{children}</Main>
      </LayoutWrapper>
      <Footer />
    </Frame>
  );
};

export default Layout;

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const LayoutWrapper = styled.div`
  flex: 1;
`;

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  height: 100%;
  padding-top: 9.6rem;
`;
