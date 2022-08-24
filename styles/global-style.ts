import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
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

ol, ul {
	list-style: none;
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
