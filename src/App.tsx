import { useState, lazy, Suspense, useEffect } from "react";
import { createGlobalStyle, styled, ThemeProvider } from "styled-components";
import { GLOBAL_COLOR } from "./utils/constans";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "$components/Layout";
import "./App.css";
import { auth } from "fbase";
import { AlertComponent } from "$components/AlertComponent";

const HomePage = lazy(() => import("$routes/Home"));

function App() {
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<any>(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <ThemeProvider theme={GLOBAL_COLOR}>
      <GlobalStyles />
      <AlertComponent />
      <Helmet titleTemplate={`%s - HBlog`} defaultTitle="Han's Blog">
        <meta name="description" content="Han's Blog" />
      </Helmet>
      <BrowserRouter>
        <Layout>
          <Suspense
            fallback={
              <Loader>
                <></>
              </Loader>
            }
          >
            {init && (
              <Routes>
                <Route
                  path="/"
                  element={<HomePage isLoggedIn={isLoggedIn} />}
                />
              </Routes>
            )}
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
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
