import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font-size: 1.6rem;
}

li {
	cursor: default;
}

html {
	font-size: 62.5%;
}

body {
	font-family: 'Inter', sans-serif !important;
	line-height: 1.6 !important;
	color: #2c3748;
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

blockquote{
  font-size: 1.4em;
  width:60%;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #78C0A8 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

blockquote::before{
  font-family:Arial;
  content: "\201C";
  color:#78C0A8;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
  vertical-align: baseline;
}
`;

export default GlobalStyle;
