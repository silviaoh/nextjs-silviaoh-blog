import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'D2Coding';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	/* color: #2c3748; */
	font-family: 'Inter', sans-serif;
	font-size: 1.6rem;
}

li {
	cursor: default;
}

html {
	font-size: 62.5%;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
	overflow: hidden;
}

hr {
	margin: 1rem 0;
	border: 0.5px solid ${({ theme }) => theme.colors.gray};
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
  vertical-align: baseline;
}
`;

export default GlobalStyle;
