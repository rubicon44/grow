import { useQuery } from "react-query";

export const useApiQuery = (queryKey, apiFetchFn) => {
  // const { data, isLoading, error } = useQuery(queryKey, apiFetchFn, {
  //   suspense: true
  // });
  const { data, error, isLoading, isFetching } = useQuery(queryKey, apiFetchFn);

  if (error) {
    return {
      data: null,
      error,
      isLoading: false,
      isFetching: false,
    };
  }

  if (data !== undefined) {
    return {
      data,
      error: null,
      isLoading,
      isFetching,
    };
  }

  return {
    data: null,
    error: null,
    isLoading,
    isFetching,
  };
};
