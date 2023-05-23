import { MainWithHeader } from "../MainWithHeader";
import { UserTasksListContainer } from "../../organisms/users/UserTasksListContainer";
import { useUserData } from "../../../../hooks/useUserData";

export const UserShowTemplate = () => {
  // todo: カスタムHooksの呼び出し位置を検討(headerのh1のため)。
  const {
    error,
    loading,
    setCheckUserNameChange,
    setUserData,
    userData,
    userNameInUrl,
  } = useUserData();

  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return (
    <MainWithHeader title={userData.nickname}>
      <UserTasksListContainer
        setCheckUserNameChange={setCheckUserNameChange}
        setUserData={setUserData}
        userData={userData}
        userNameInUrl={userNameInUrl}
      />
    </MainWithHeader>
  );
};
