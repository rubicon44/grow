import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetErrorMessage } from "../useGetErrorMessage";
import { getFollowers } from "../../infra/api";

export const useFollowers = () => {
  const location = useLocation();
  const { username } = location.state;
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFollowers(username);
        const followersData = response.data.followers;
        setFollowers(followersData);
      } catch (error) {
        setError(error);
        const verbForErrorMessage = `フォロワー`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers(username);
  }, [username, getErrorMessage]);

  return {
    error,
    followers,
    loading,
  };
};
