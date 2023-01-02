import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentTaskId } from 'hooks/useCurrentTaskId';
import { useCurrentUserName } from 'hooks/useCurrentUserName';
import { deleteTask } from 'infra/api';
import { getTask } from 'infra/api';

export const useTaskData = () => {
  const currentTaskId = useCurrentTaskId();
  const currentUserName = useCurrentUserName();
  const [taskData, setTaskData] = useState({
    task: [],
    taskCreatedUser: [],
    taskCreatedUserName: null,
  });
  useEffect(() => {
    let isMounted = true;
    getTask(currentTaskId)
      .then((response) => {
        if (isMounted) setTaskData({
          task: response.data,
          taskCreatedUser: response.data.user,
          taskCreatedUserName: response.data.user.username,
        });
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, [currentTaskId]);

  const { id: taskId } = taskData.task;
  const { title: taskTitle } = taskData.task;
  const { content: taskContent } = taskData.task;
  const { status: taskStatus } = taskData.task;
  const { start_date: startDate } = taskData.task;
  const { end_date: endDate } = taskData.task;
  const { username: taskCreatedUserName } = taskData.taskCreatedUser;

  const navigate = useNavigate();
  const nextEditTaskFunc = () => {
    navigate(`/tasks/edit/${taskId}`, {
      state: {
        id: taskId,
        title: taskTitle,
        content: taskContent,
        status: taskStatus,
        startDate: startDate,
        endDate: endDate,
        currentUserName,
      },
    });
  };

  const [load, setLoad] = useState(false);
  const [deleteCheckAble, setDeleteCheckAble] = useState(false);

  const deleteCheckFunc = () => {
    setLoad(true);
    setDeleteCheckAble(true);
  };

  const deleteTaskFunc = async () => {
    await deleteTask(taskId).then().catch();
    setLoad(false);
    await navigate(`/${taskCreatedUserName}`);
  };

  const unDeleteCheckFunc = () => {
    setLoad(false);
    setDeleteCheckAble(false);
  };

  return [taskData, { deleteCheckAble, deleteCheckFunc, deleteTaskFunc, nextEditTaskFunc, load, unDeleteCheckFunc }];
};