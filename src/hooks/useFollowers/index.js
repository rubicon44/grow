import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetErrorMessage } from 'hooks/useGetErrorMessage';
import { getFollowers } from 'infra/api';

export const useFollowers = () => {
  const location = useLocation();
  const { username } = location.state;
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFollowers(username);
        const followersData = response.data;
        setFollowers(followersData.followers);
      } catch (error) {
        setError(error);
        console.error(`フォロワーの取得中にエラーが発生しました。: `, error);
        const verbForErrorMessage = `フォロワー`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      };
    };

    fetchFollowers(username);
  }, [username]);

  return {
    error,
    followers,
    loading,
    username
  };
};