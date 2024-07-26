import { lazy, Suspense } from "react";
import { styled, ThemeProvider } from "styled-components";
import { GLOBAL_COLOR } from "./utils/constans";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "$components/Layout";
import { ClipLoader } from "react-spinners";

const HomePage = lazy(() => import("$routes/Home"));

function App() {
  return (
    <ThemeProvider theme={GLOBAL_COLOR}>
      <Helmet titleTemplate={`%s - HBlog`} defaultTitle="Han's Blog">
        <meta name="description" content="Han's Blog" />
      </Helmet>
      <BrowserRouter>
        <Layout>
          <Suspense
            fallback={
              <Loader>
                <ClipLoader />
              </Loader>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
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
