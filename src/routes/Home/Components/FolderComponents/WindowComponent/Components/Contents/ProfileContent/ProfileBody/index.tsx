import { styled } from "styled-components";
import { lazy, Suspense } from "react";

const CommonComponent = lazy(() => import("./Common"));
const SystemComponent = lazy(() => import("./System"));

export const ProfileBody = ({ selectedMenu }: { selectedMenu: number }) => {
  return (
    <ProfileBodyWrapper>
      <Suspense>
        {selectedMenu === 1 ? <CommonComponent /> : <SystemComponent />}
      </Suspense>
    </ProfileBodyWrapper>
  );
};

const ProfileBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
