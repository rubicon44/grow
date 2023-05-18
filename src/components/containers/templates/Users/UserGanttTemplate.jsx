import styled from "styled-components";
import { HeaderContainer } from "../../organisms/common/HeaderContainer";
import { GanttChartContainer } from "../../organisms/tasks/GanttChartContainer";

export const UserGanttTemplate = () => (
  <>
    <HeaderContainer />
    <Main>
      <GanttChartContainer />
    </Main>
  </>
);

const Main = styled.main`
  text-align: center;
  background-color: #f8f7f3;
`;
