import { useState, lazy, Suspense, useEffect } from "react";
import { styled, ThemeProvider } from "styled-components";
import { GLOBAL_COLOR } from "./utils/constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "$components/Layout";
import "./App.css";
import { auth } from "fbase";
import { AlertComponent } from "$components/AlertComponent";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "$utils/atom";
import { GlobalStyles } from "styles";

const HomePage = lazy(() => import("$routes/Home"));
const AddPage = lazy(() => import("$routes/Add"));

function App() {
  const [init, setInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(isLoggedInState);
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
                <Route
                  path="/add"
                  element={<AddPage isLoggedIn={isLoggedIn} />}
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
