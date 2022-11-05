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

export const ParagraphStyle = css<{
  fontSize: string;
  color?: 'black' | 'gray' | 'darkGray' | 'deepDarkGray';
  fontWeight?: number;
  margin?: string;
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme, color }) => (color ? theme.colors[color] : '#303030')};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: 1.4;
  margin: ${({ margin }) => margin};
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Paragraph = styled.p`
  ${ParagraphStyle}
`;

export const FlexWrapperStyle = css<{
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  margin?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;

export const FlexWrapper = styled.div`
  ${FlexWrapperStyle}
`;
