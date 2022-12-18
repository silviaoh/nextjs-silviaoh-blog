import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setTimeout(() => setLoading(false), 1000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <React.Fragment>
      {loading && (
        <LoadingBox>
          <RoundBox>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </RoundBox>
        </LoadingBox>
      )}
    </React.Fragment>
  );
};

export default Loading;

const LoadingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 3;
  transition: opacity 100ms ease-in-out;
`;

const RoundBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  animation: animate 1.2s linear infinite;

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  > span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  }

  > span:nth-child(1) {
    filter: blur(5px);
  }

  > span:nth-child(2) {
    filter: blur(10px);
  }
  > span:nth-child(3) {
    filter: blur(25px);
  }
  > span:nth-child(4) {
    filter: blur(50px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #f1f1f1;
    border: solid white 10px;
    border-radius: 50%;
  }
`;
