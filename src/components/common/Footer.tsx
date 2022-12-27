import React from 'react';
import styled from 'styled-components';
import { ImageBox } from '../../styles/Common';
import test from '../public/images/test.jpeg';
import Image from 'next/image';

const Footer = () => {
  return (
    <RootFooter>
      <hr />
      <LinkButtonBox>
        <ImageBox width="1.8rem" height="1.8rem" borderRadius="0.9rem">
          <Image
            src={test}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>
        <ImageBox width="1.8rem" height="1.8rem" borderRadius="0.9rem">
          <Image
            src={test}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ImageBox>
      </LinkButtonBox>
    </RootFooter>
  );
};

export default Footer;

const RootFooter = styled.footer`
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

const LinkButtonBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
