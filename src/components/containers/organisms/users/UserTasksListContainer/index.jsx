import { useCurrentUserId } from "../../../../../hooks/useCurrentUserId";
import { useMoveToFollowers } from "../../../../../hooks/useMoveToFollowers";
import { useMoveToFollowings } from "../../../../../hooks/useMoveToFollowings";
import { useMoveToGanttChart } from "../../../../../hooks/useMoveToGanttChart";
import { useShowPopup } from "../../../../../hooks/useShowPopup";
import { useUserData } from "../../../../../hooks/useUserData";
import { UserTasksList } from "../userTasksList";

export const UserTasksListContainer = () => {
  const { showPopup } = useShowPopup();
  const currentUserId = useCurrentUserId();
  const {
    error,
    loading,
    setCheckUserNameChange,
    setUserData,
    userData,
    userNameInUrl,
  } = useUserData();

  // todo: useMoveTo~は、API通信用のHooksと見間違える可能性があるため、名称変更した方が良い？
  const { moveToFollowers } = useMoveToFollowers(userData);
  const { moveToFollowings } = useMoveToFollowings(userData);
  const { moveToGanttChart } = useMoveToGanttChart(userData);

  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  return (
    <UserTasksList
      currentUserId={currentUserId}
      error={error}
      loading={loading}
      moveToFollowers={moveToFollowers}
      moveToFollowings={moveToFollowings}
      moveToGanttChart={moveToGanttChart}
      setCheckUserNameChange={setCheckUserNameChange}
      setUserData={setUserData}
      showPopup={showPopup}
      userData={userData}
      userNameInUrl={userNameInUrl}
    />
  );
};
