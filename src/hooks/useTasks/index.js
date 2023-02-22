// import { useEffect } from 'react';
import { getTasks } from 'infra/api';
import { useApiQuery } from 'infra/api/hooks/useApiQuery';

export const useTasks = () => {
  const { data, error, loading } = useApiQuery('tasks', getTasks);

  // // todo: Change useEffect to React Query onError later.
  // useEffect(() => {
  //   if (error) {
  //     console.error(`タスク取得中にエラーが発生しました。: ` + error);
  //     let errorMessage = `タスクを取得できませんでした。しばらく時間をおいて再度お試しください。`;
  //     if (error instanceof ReferenceError) {
  //       errorMessage = `タスクを取得できませんでした。しばらく時間をおいて再度お試しください。`;
  //     } else if (error.response) {
  //       const status = error.response.status;
  //       switch (status) {
  //         case 404:
  //           errorMessage = `タスク一覧を取得できませんでした。タスクが削除された可能性があります。`;
  //           break;
  //         case 403:
  //           errorMessage = `タスク一覧を取得する権限がありません。`;
  //           break;
  //         case 400:
  //           errorMessage = `タスク一覧を取得できませんでした。不正なリクエストが送信されました。`;
  //           break;
  //         default:
  //           errorMessage = `タスク一覧を取得できませんでした。サーバーエラーが発生しました。`;
  //           break;
  //       };
  //     } else if (error.request) {
  //       errorMessage = `タスク一覧を取得できませんでした。ネットワークに接続されていない可能性があります。`;
  //     } else {
  //       errorMessage = `タスク一覧を取得できませんでした。しばらく時間をおいて再度お試しください。`;
  //     };
  //     window.alert(errorMessage);
  //   };
  // }, [error]);

  return {
    error,
    loading,
    tasksData: data.data,
  };
};