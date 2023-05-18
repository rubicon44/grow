import { MainWithHeader } from "../MainWithHeader";
import { UserTasksListContainer } from "../../organisms/users/UserTasksListContainer";

export const UserShowTemplate = () => {
  return (
    <MainWithHeader>
      <UserTasksListContainer />
    </MainWithHeader>
  );
};
