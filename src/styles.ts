import { createGlobalStyle, styled } from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
export const GlobalStyles = createGlobalStyle`
  html, body, div, span {
	margin: 0;
	padding: 0;
	border: 0;
  	box-sizing: border-box;
  	-webkit-user-select:none;
  	-moz-user-select:none;
  	-ms-user-select:none;
  	user-select:none
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
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
