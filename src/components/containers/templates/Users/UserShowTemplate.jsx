import { MainWithHeader } from "../MainWithHeader";
import { UserTasksListContainer } from "../../organisms/users/UserTasksListContainer";

export const UserShowTemplate = () => (
  <MainWithHeader>
    <UserTasksListContainer />
  </MainWithHeader>
);
