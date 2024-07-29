import { HomeIcon } from "$components/HomeIcon";
import { styled } from "styled-components";
import { TASK_LIST } from "./constants";

const Home = () => {
  return (
    <HomeContainer>
      {TASK_LIST.map((item, index) => (
        <HomeIcon key={item.title} item={item} index={index} />
      ))}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 15px 0;
`;
