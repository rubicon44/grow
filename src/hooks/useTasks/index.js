import { useEffect, useState } from "react";
import { useCurrentUserId } from "../useCurrentUserId";
import { getTasks } from "../../infra/api";
import { useApiQuery } from "../../infra/api/hooks/useApiQuery";

export const useTasks = () => {
  const currentUserId = useCurrentUserId();
  const [page, setPage] = useState(1); // ページ番号
  const pageSize = 3; // 1ページあたりのタスク数
  const { data, error, isLoading, isFetching } = useApiQuery(
    ["tasks", page, pageSize],
    () => getTasks({ currentUserId, page, pageSize })
  );

  const [accumulatedData, setAccumulatedData] = useState({
    followingUserTasks: [],
    tasks: [],
  });

  useEffect(() => {
    if (data) {
      setAccumulatedData((prevData) => ({
        followingUserTasks: [
          ...prevData.followingUserTasks,
          ...(data?.data?.followingUserTasks?.map((task) => ({
            ...task,
            id: task.id.toString(),
            userId: task.userId.toString(),
            user: {
              ...task.user,
              id: task.user.id.toString(),
            },
          })) || []),
        ],
        tasks: [
          ...prevData.tasks,
          ...(data?.data?.tasks?.map((task) => ({
            ...task,
            id: task.id.toString(),
            userId: task.userId.toString(),
            user: {
              ...task.user,
              id: task.user.id.toString(),
            },
          })) || []),
        ],
      }));
    }
  }, [data]);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      // 最下部にスクロールされ、データのロード中でない場合に次のページのデータを取得
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    error,
    isFetching,
    isLoading,
    ...accumulatedData,
  };
};
