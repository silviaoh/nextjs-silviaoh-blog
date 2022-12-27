import styled, { css } from 'styled-components';

// Style
export const ImageBoxStyle = css<{
  width: string;
  height: string;
  borderRadius?: string;
}>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: hidden;
`;

export const ParagraphStyle = css<{
  fontSize: string;
  color?: 'black' | 'gray' | 'darkGray' | 'deepDarkGray';
  fontWeight?: number;
  margin?: string;
}>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.darkGray};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: 1.4;
  margin: ${({ margin }) => margin};
  word-break: break-word;
  white-space: pre-wrap;
`;

export const FlexBoxStyle = css<{
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

export const MultiLineEllepsisStyle = () => css`
  display: -webkit-box;
  white-space: normal;
  text-overflow: ellipsis;
  line-height: 1.2;
  overflow: hidden;
  word-wrap: break-word;
  text-align: left;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

// Mixin
export const FlexMixin = ({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  margin,
  flexWrap,
}: {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  margin?: string;
  flexWrap?: string;
}) => css`
  display: flex;
  justify-content: ${justifyContent};
  flex-direction: ${flexDirection};
  align-items: ${alignItems};
  gap: ${gap};
  margin: ${margin};
  flex-wrap: ${flexWrap};
`;

export const SingleLineEllepsisMixin = (width: string) => css`
  display: inline-block;
  width: ${width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Components
export const ImageBox = styled.div`
  ${ImageBoxStyle}
`;

export const Paragraph = styled.p`
  ${ParagraphStyle}
`;

export const FlexBox = styled.div`
  ${FlexBoxStyle}
`;
