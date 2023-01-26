import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaskData } from 'hooks/useTaskData';
import { deleteTask } from 'infra/api';

export const useTaskEditAndDelete = () => {
  const taskData = useTaskData();
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
        taskData: {
          task: {
            id: taskId,
            title: taskTitle,
            content: taskContent,
            status: taskStatus,
            startDate: startDate,
            endDate: endDate,
          }
        }
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
  return { deleteCheckAble, deleteCheckFunc, deleteTaskFunc, nextEditTaskFunc, load, unDeleteCheckFunc };
};