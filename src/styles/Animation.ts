import { css } from 'styled-components';

export const RainbowTextStyle = css`
  // 글자 색 자동으로 변경되는 애니메이션
  background-image: linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: transformHue 3s infinite linear;

  @keyframes transformHue {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(-360deg);
    }
  }
`;

export const RainbowBorderStyle = css`
  // 글자 색 자동으로 변경되는 애니메이션
  border: 1px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  animation: transformHue 3s infinite linear;
  background-origin: border-box;
  background-clip: content-box, border-box;

  @keyframes transformHue {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(-360deg);
    }
  }
`;
