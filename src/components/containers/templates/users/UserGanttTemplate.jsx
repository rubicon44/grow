import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { GanttChartContainer } from "../../organisms/tasks/GanttChartContainer";
import { TitleWithBackArrowHeader } from "../../../presentational/molecules/Header/TitleWithBackArrowHeader";

export const UserGanttTemplate = () => (
  <MainWithHeaderContainer width="null">
    <TitleWithBackArrowHeader title="ガントチャート" />
    <GanttChartContainer />
  </MainWithHeaderContainer>
);
