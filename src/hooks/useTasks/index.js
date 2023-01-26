import { useEffect, useState } from 'react';
import { getTasks } from 'infra/api';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(async () => {
    let isMounted = true;
    await getTasks()
      .then((response) => {
        if (isMounted) {
          setTasks(response.data);
        };
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return tasks;
};