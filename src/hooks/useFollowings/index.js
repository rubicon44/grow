import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetErrorMessage } from '../useGetErrorMessage';
import { getFollowings } from '../../infra/api';

export const useFollowings = () => {
  const location = useLocation();
  const { username } = location.state;
  const { getErrorMessage } = useGetErrorMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const fetchFollowings = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getFollowings(username);
        const followingsData = response.data;
        setFollowings(followingsData.followings);
      } catch (error) {
        setError(error);
        console.error(`フォロワー中のユーザーの取得中にエラーが発生しました。: `, error);
        const verbForErrorMessage = `フォロワー中のユーザー`;
        const objectForErrorMessage = `取得`;
        getErrorMessage(error, verbForErrorMessage, objectForErrorMessage);
      } finally {
        setLoading(false);
      };
    };

    fetchFollowings(username);
  }, [username]);

  return {
    error,
    followings,
    loading,
    username
  };
};