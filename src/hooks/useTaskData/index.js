import { useEffect, useState } from 'react';
import { useCurrentTaskId } from 'hooks/useCurrentTaskId';
import { getTask } from 'infra/api';

export const useTaskData = () => {
  const currentTaskId = useCurrentTaskId();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [taskData, setTaskData] = useState({
    task: { id: '', title: '', content: '', status: '', start_date: '', end_date: '' },
    taskCreatedUser: '',
    taskCreatedUserName: '',
  });

  useEffect(() => {
    const fetchTaskData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getTask(currentTaskId);
        const task = response.data;
        setTaskData({
          task: task,
          taskCreatedUser: task.user,
          taskCreatedUserName: task.user.username,
        });
      } catch (error) {
        setError(error);
        console.error(`タスク取得中にエラーが発生しました。: ` + error);
        let errorMessage = `タスクを取得できませんでした。しばらく時間をおいて再度お試しください。`;
        if (error instanceof ReferenceError) {
          errorMessage = `タスクを取得できませんでした。しばらく時間をおいて再度お試しください。`;
        } else if (error.response) {
          const status = error.response.status;
          switch (status) {
            case 404:
              errorMessage = `選択したタスクが見つかりませんでした。タスクが削除された可能性があります。`;
              break;
            case 403:
              errorMessage = `タスクを取得する権限がありません。`;
              break;
            case 400:
              errorMessage = `タスクを取得できませんでした。不正なリクエストが送信されました。`;
              break;
            default:
              errorMessage = `タスクを取得できませんでした。サーバーエラーが発生しました。`;
              break;
          };
        } else if (error.request) {
          errorMessage = `タスクを取得できませんでした。ネットワークに接続されていない可能性があります。`;
        } else {
          errorMessage = `タスクを取得できませんでした。しばらく時間をおいて再度お試しください。`;
        };
        window.alert(errorMessage);
      } finally {
        setLoading(false);
      };
    };
    fetchTaskData();
  }, [currentTaskId]);

  return { loading, error, taskData };
};