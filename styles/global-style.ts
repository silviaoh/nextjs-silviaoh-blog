import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font-family: 'Noto Sans KR', sans-serif;
}

html {
  font-size: 10px;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ul,ol {
	list-style:none;
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

pre {
	margin: 1rem 0;
	line-height: 1.6;

	.hljs {
		color: #BFC2C0;
		font-weight: 400;
		border-radius: 5px;
		background-color: #26252B;
	}

	.hljs-section, .hljs-title {
		color: #FFA64D;
	}

	.hljs-deletion, .hljs-number, .hljs-quote, .hljs-selector-class, .hljs-selector-id, .hljs-string, .hljs-template-tag, .hljs-type {
		color: #DCBB18;
	}
}
`;

export default GlobalStyle;
