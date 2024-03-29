import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFollowers } from "../../infra/api";

export const useFollowers = () => {
  const location = useLocation();
  const { username } = location.state;
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
        const followersDataWithToString = followersData.map((follower) => ({
          ...follower,
          id: follower.id.toString(),
        }));
        setFollowers(followersDataWithToString);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers(username);
  }, [username]);

  return {
    error,
    followers,
    loading,
  };
};
