import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import React from 'react';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
    </React.Fragment>
  );
};

export default Home;

const Test = styled.p`
  color: red;
  background-color: yellow;
`;
