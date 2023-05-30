import { MainWithHeaderContainer } from "../MainWithHeaderContainer";
import { UserTasksListContainer } from "../../organisms/users/UserTasksListContainer";

export const UserShowTemplate = () => (
  <MainWithHeaderContainer>
    <UserTasksListContainer />
  </MainWithHeaderContainer>
);
