import { createGlobalStyle, styled } from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
 blockquote, pre, a, abbr, acronym, address, big, cite, code,
 del, dfn, img, ins, kbd, q, samp,
 sup, tt, var,
 b, center,
 dl, dt, dd, ol, ul, li,
 fieldset, form, label, legend,
 table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
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
}
div {
  background-repeat : no-repeat;
}
button{
  background: inherit ; border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible;
}
`;
