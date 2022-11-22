import React from 'react';
import styled from 'styled-components';
import { ImageWrapper } from '../../styles/Common';
import test from '../public/images/test.jpeg';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Frame>
      <hr />

      <LinkButtonWrapper>
        <ImageWrapper width="1.8rem" height="1.8rem" borderRadius="0.9rem">
          <Image
            src={test}
            layout="fill"
            objectFit="cover"
            objectPosition={'center'}
          />
        </ImageWrapper>
        <ImageWrapper width="1.8rem" height="1.8rem" borderRadius="0.9rem">
          <Image
            src={test}
            layout="fill"
            objectFit="cover"
            objectPosition={'center'}
          />
        </ImageWrapper>
      </LinkButtonWrapper>
    </Frame>
  );
};

export default Footer;

const Frame = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 60px;
  padding: 2.2rem;
  background-color: #fff;

  hr {
    border: 0.5px solid ${({ theme }) => theme.colors.darkGray};
  }
`;

const LinkButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
