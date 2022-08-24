import styled, { css } from 'styled-components';

export const ImageWrapperStyle = css<{
  width: string;
  height: string;
  borderRadius: string;
}>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  ${ImageWrapperStyle}
`;
