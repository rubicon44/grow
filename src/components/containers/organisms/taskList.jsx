import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask } from '../../../infra/api';
import { List } from '../../presentational/molecules/List';

const TaskListCover = styled.div`
  min-width: 180px;
  margin-top: 30px;
`

const TaskCreatedUserCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

export function TaskList(props) {
  const task = props.task;
  const taskCreatedUser = props.taskCreatedUser;
  const taskId = task.id;
  const taskTitle = task.title;
  const taskContent = task.content;
  const taskCreatedUserId = task.user_id;

  let currentUserDataText =localStorage.getItem('user');
  const currentUserData = JSON.parse(currentUserDataText);
  const currentUserId = currentUserData['id'].toString();


  const EditTaskButton = () => {
    if (taskCreatedUserId === currentUserId) {
      return <button onClick={() => editTaskFunc(taskId, currentUserId)}>編集</button>;
    } else {
      return null;
    }
  }

  const navigate = useNavigate();
  const editTaskFunc = (taskId, currentUserId) => {
    navigate(`/tasks/edit/${taskId}`, {
      state: {
        id: taskId,
        title: taskTitle,
        content: taskContent,
        current_user_id: currentUserId,
      },
    });
  };

  const DeleteTaskButton = () => {
    if (taskCreatedUserId === currentUserId) {
      return <button onClick={() => deleteTaskFunc(taskId)}>削除</button>;
    } else {
      return null;
    }
  }

  const deleteTaskFunc = (taskId) => {
    deleteTask(taskId)
    .then(response => {
      console.log(response.data);
      console.log("正常に削除されました。");
    })
    .catch(response => {
      console.log(response.data);
    });
    navigate(`/users/${taskCreatedUser.id}`);
  };

  return (
    <React.Fragment>
      <TaskListCover>
        <List title={taskTitle} content={taskContent} />
        <TaskCreatedUserCover>
          by:
          <Link to={`/users/${taskCreatedUser.id}`}>{taskCreatedUser.name}</Link>
        </TaskCreatedUserCover>
        <EditTaskButton />
        <DeleteTaskButton />
      </TaskListCover>
    </React.Fragment>
  )
}