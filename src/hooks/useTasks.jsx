import { useEffect, useState } from 'react';
import { getTasks } from 'infra/api';

export const useTasks = () => {
  const sortdOrder = (data) => {
    const list = data;
    const dOrder = list.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
    return dOrder;
  };

  const [tasks, setTasks] = useState([]);
  useEffect(async () => {
    let isMounted = true;
    await getTasks()
      .then((response) => {
        if (isMounted) {
          const dOrderData = sortdOrder(response.data);
          setTasks(dOrderData);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);

  return tasks;
};