import { useQuery } from "react-query";

export const useApiQuery = (queryKey, apiFetchFn) => {
  // const { data, isLoading, error } = useQuery(queryKey, apiFetchFn, {
  //   suspense: true
  // });
  const { data, isLoading, error } = useQuery(queryKey, apiFetchFn);

  if (error) {
    console.error(`Error in useApiQuery: ${error.message}`);
    return {
      data: [],
      error,
      loading: false,
    };
  }

  if (data !== undefined && data.length !== 0) {
    return {
      data,
      loading: isLoading,
    };
  }
  return {
    data: [],
    loading: isLoading,
  };
};
