import { ButtonComponent } from "$components/ButtonComponent";
import { Overlay } from "$components/Overlay";
import { alertMsgState } from "$utils/atom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { styled } from "styled-components";
import { FlexBox } from "styles";

export const AlertComponent = () => {
  const alertMsg = useRecoilValue(alertMsgState);
  const resetAlertMsgState = useResetRecoilState(alertMsgState);
  return (
    <>
      {alertMsg && (
        <Overlay onClick={resetAlertMsgState} open={Boolean(alertMsg)}>
          <AlertWrapper>
            <Title>Alert</Title>
            <AlertBody>
              <AlertText>
                <AlertIcon alt="alertIcon" src="/images/warning.png" />
                {alertMsg}
              </AlertText>
              <ButtonComponent
                action={resetAlertMsgState}
                content={<span>확 인</span>}
                width="100px"
                height="35px"
              />
            </AlertBody>
          </AlertWrapper>
        </Overlay>
      )}
    </>
  );
};

const AlertWrapper = styled.div`
  width: 500px;
  border-top: 2px solid ${(props) => props.theme.lightGray};
  border-left: 2px solid ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(props) => props.theme.darkGray};
  border-right: 2px solid ${(props) => props.theme.darkGray};
`;
const Title = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.theme.blue};
  color: white;
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  font-family: "Retro";
`;
const AlertBody = styled(FlexBox)`
  width: 100%;
  background-color: ${(props) => props.theme.gray};
  padding: 30px 20px;
  font-size: 13px;
  font-weight: 600;
  gap: 30px;
  flex-direction: column;
`;
const AlertText = styled(FlexBox)`
  width: 100%;
  gap: 20px;
`;
const AlertIcon = styled.img`
  width: 30px;
  height: 30px;
`;
