import styled from "styled-components";
import { HeaderContainer } from "../../organisms/common/HeaderContainer";
import { GanttChartContainer } from "../../organisms/tasks/GanttChartContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserGanttTemplate = () => (
  <>
    <HeaderContainer title="ガントチャート" />
    <Main>
      <TitleWithBackArrowHeader />
      <GanttChartContainer />
    </Main>
  </>
);

const Main = styled.main`
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`;
