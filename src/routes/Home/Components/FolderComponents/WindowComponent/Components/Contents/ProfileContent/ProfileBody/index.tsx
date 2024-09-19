import { lazy, Suspense } from "react";
import { ProfileBodyWrapper } from "../styles";

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
