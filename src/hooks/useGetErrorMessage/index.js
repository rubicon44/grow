import { useMemo } from "react";

export const useGetErrorMessage = () => {
  const errorMessages = useMemo(
    () => ({
      default: "エラーが発生しました。しばらく時間をおいて再度お試しください。",
      notFound: "データが見つかりませんでした。",
      forbidden: "アクセス権限がありません。",
      badRequest: "不正なリクエストが送信されました。",
      serverError: "サーバーエラーが発生しました。",
      networkError: "ネットワークに接続されていません。",
    }),
    []
  );

  const getErrorMessage = useMemo(
    () => (error) => {
      if (error.response) {
        const { status } = error.response;
        switch (status) {
          case 404:
            return errorMessages.notFound;
          case 403:
            return errorMessages.forbidden;
          case 400:
            return errorMessages.badRequest;
          default:
            return errorMessages.serverError;
        }
      } else if (error.request) {
        return errorMessages.networkError;
      } else {
        return errorMessages.default;
      }
    },
    [errorMessages]
  );

  return { getErrorMessage };
};
