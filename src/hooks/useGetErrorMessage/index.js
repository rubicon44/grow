import { useMemo } from "react";

export const useGetErrorMessage = () => {
  const getErrorMessage = useMemo(
    () => (error, verbForErrorMessage, objectForErrorMessage) => {
      let errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}できませんでした。しばらく時間をおいて再度お試しください。`;
      if (error instanceof ReferenceError) {
        errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}できませんでした。しばらく時間をおいて再度お試しください。`;
      } else if (error.response) {
        const { status } = error.response;
        switch (status) {
          case 404:
            errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}できませんでした。タスクが削除された可能性があります。`;
            break;
          case 403:
            errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}する権限がありません。`;
            break;
          case 400:
            errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}できませんでした。不正なリクエストが送信されました。`;
            break;
          default:
            errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}できませんでした。サーバーエラーが発生しました。`;
            break;
        }
      } else if (error.request) {
        errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}できませんでした。ネットワークに接続されていない可能性があります。`;
      } else {
        errorMessage = `${verbForErrorMessage}を${objectForErrorMessage}できませんでした。しばらく時間をおいて再度お試しください。`;
      }
      window.alert(errorMessage);
    },
    []
  );

  return { getErrorMessage };
};
