import { useQuery } from 'react-query';

export const useApiQuery = (queryKey, apiFetchFn) => {
  const { data, isLoading, error } = useQuery(queryKey, apiFetchFn);
  if (error) return <p>An error has occurred: {error.message}</p>;
  return {
    data: data || [],
    loading: isLoading,
  };
};