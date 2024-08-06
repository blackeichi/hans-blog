import { Overlay } from "$components/Overlay";
import { alertMsgState } from "$utils/atom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { styled } from "styled-components";

export const AlertComponent = () => {
  const alertMsg = useRecoilValue(alertMsgState);
  const resetAlertMsgState = useResetRecoilState(alertMsgState);
  return (
    <>
      {alertMsg && (
        <Overlay onClick={resetAlertMsgState} open={Boolean(alertMsg)}>
          <AlertWrapper>
            <Title>Alert</Title>
          </AlertWrapper>
        </Overlay>
      )}
    </>
  );
};

const AlertWrapper = styled.div``;
const Title = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.blue};
  color: white;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
  font-family: "Retro";
`;
