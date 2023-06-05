import { useEffect, useState } from "react";
import { useCurrentUserName } from "../useCurrentUserName";
import { getFollowers } from "../../infra/api";

export const useMyFollowers = () => {
  const currentUserName = useCurrentUserName();
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
        const myFollowersDataWithToString = myFollowersData.map((follower) => ({
          ...follower,
          id: follower.id.toString(),
        }));
        setMyFollowers(myFollowersDataWithToString);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers(currentUserName);
  }, [currentUserName]);

  return {
    error,
    loading,
    myFollowers,
  };
};
