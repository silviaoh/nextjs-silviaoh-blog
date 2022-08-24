import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { ImageWrapper } from '../styles/common-style';
import test from '../public/images/test.jpeg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  console.log('router.pathname', router.pathname);
  return (
    <Frame>
      <ProfileImageWrapper width="4.6rem" height="4.6rem" borderRadius="2.3rem">
        <Image
          src={test}
          layout="fill"
          objectFit="cover"
          objectPosition={'center'}
        />
      </ProfileImageWrapper>

      <NavList pathname={router.pathname}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </NavList>
    </Frame>
  );
};

export default Navigation;

const Frame = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 1;
`;

const ProfileImageWrapper = styled(ImageWrapper)`
  box-shadow: 1px 4px 18px 0px rgba(58, 59, 59, 0.57);
`;

const NavList = styled.nav<{ pathname: string }>`
  display: flex;
  align-items: center;
  gap: 3rem;

  > a {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 1.4rem;
    font-weight: 600;
    text-decoration: none;

    &::after {
      display: block;
      content: '';
      border-bottom: solid 3px ${({ theme }) => theme.colors.purple};
      margin-top: 0.6rem;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover {
      color: ${({ pathname, theme }) =>
        pathname === '/' && theme.colors.purple};
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  > a:first-child {
    color: ${({ pathname, theme }) => pathname === '/' && theme.colors.purple};

    &::after {
      transform: ${({ pathname }) => pathname === '/' && 'scaleX(1)'};
    }
  }
  > a:nth-child(2) {
    color: ${({ pathname, theme }) =>
      pathname === '/blog' && theme.colors.purple};
    &::after {
      transform: ${({ pathname }) => pathname === '/blog' && 'scaleX(1)'};
    }
  }
  > a:last-child {
    color: ${({ pathname, theme }) =>
      pathname === '/about' && theme.colors.purple};
    &::after {
      transform: ${({ pathname }) => pathname === '/about' && 'scaleX(1)'};
    }
  }
`;
