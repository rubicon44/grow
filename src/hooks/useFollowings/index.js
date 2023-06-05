import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getFollowings } from "../../infra/api";

export const useFollowings = () => {
  const location = useLocation();
  const { username } = location.state;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [followings, setFollowings] = useState(null);

  useEffect(() => {
    const fetchFollowings = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFollowings(username);
        const followingsData = response.data.followings;
        const followingsDataWithToString = followingsData.map((following) => ({
          ...following,
          id: following.id.toString(),
        }));
        setFollowings(followingsDataWithToString);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowings(username);
  }, [username]);

  return {
    error,
    followings,
    loading,
  };
};
