import { useEffect, useState } from "react";
import { useCurrentUserName } from "../useCurrentUserName";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { getFollowers } from "../../infra/api";

export const useMyFollowers = () => {
  const currentUserName = useCurrentUserName();
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myFollowers, setMyFollowers] = useState(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFollowers(currentUserName);
        const myFollowersData = response.data.followers;
        setMyFollowers(myFollowersData);
      } catch (error) {
        setError(error);
        const verbForErrorMessage = `フォロワー`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers(currentUserName);
  }, [currentUserName, getErrorMessage]);

  return {
    error,
    loading,
    myFollowers,
  };
};
