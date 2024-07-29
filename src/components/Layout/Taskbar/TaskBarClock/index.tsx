import { getFormattedDate } from "$utils/libs/timeLibs";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { FlexBox } from "styles";

export const TaskBarClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(id);
  }, []);
  return (
    <ClockBox>
      <IconBox>
        <Icon alt="calendar" src="/images/calendar.png" />
        <Icon alt="clock" src="/images/clock.png" />
      </IconBox>
      {getFormattedDate(time)}
    </ClockBox>
  );
};

const ClockBox = styled.div`
  font-size: 9px;
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 2px solid ${(props) => props.theme.shadow};
  border-left: 2px solid ${(props) => props.theme.shadow};
  border-bottom: 2px solid ${(props) => props.theme.lightGray};
  border-right: 2px solid ${(props) => props.theme.lightGray};
`;
const IconBox = styled(FlexBox)`
  gap: 3px;
`;
const Icon = styled.img`
  height: 100%;
`;
