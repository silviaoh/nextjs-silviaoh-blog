import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { ImageBox } from '../../styles/Common';

interface IPositionsStyleProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

interface IProfileImageBoxProps {
  width: string;
  height: string;
  borderRadius: string;
  enablePointer: boolean;
  positions?: IPositionsStyleProps;
  transform?: string;
  onClick?: () => void;
}

const ProfileImageBox = (props: IProfileImageBoxProps) => {
  const {
    width,
    height,
    borderRadius,
    enablePointer,
    positions,
    transform,
    onClick = () => {},
  } = props;

  return (
    <RootImageBox
      width={width}
      height={height}
      borderRadius={borderRadius}
      enablePointer={enablePointer}
      onClick={onClick}
      positions={positions}
      transform={transform}
    >
      <Image
        src="/images/common/profile.jpeg"
        layout="fill"
        objectFit="cover"
        objectPosition={'center'}
      />
    </RootImageBox>
  );
};

export default ProfileImageBox;

const RootImageBox = styled(ImageBox)<{
  enablePointer: boolean;
  positions?: IPositionsStyleProps;
  transform?: string;
}>`
  position: absolute;
  box-shadow: 1px 4px 18px 0px rgba(58, 59, 59, 0.57);
  cursor: ${({ enablePointer }) => (enablePointer ? 'pointer' : 'default')};
  z-index: 1;

  ${({ positions }) => css`
    top: ${positions?.top || 'auto'};
    left: ${positions?.left || 'auto'};
    right: ${positions?.right || 'auto'};
    bottom: ${positions?.bottom || 'auto'};
  `};

  ${({ transform }) => css`
    transform: ${transform};
  `};

  // 말풍선 만들기
`;
