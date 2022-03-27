import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask } from '../../../../infra/api';
import { List } from '../../../presentational/molecules/List/list';

const ListCover = styled.div`
  min-width: 180px;
  margin-top: 30px;
`

export function TaskList(props) {
  const task = props.task;
  const taskId = task.id;
  const taskTitle = task.title;
  const taskContent = task.content;
  const taskCreatedUserId = task.user_id;
  const taskCreatedUserName = props.taskCreatedUser.name;

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
    navigate(`/users/${taskCreatedUserId}`);
  };

  return (
    <ListCover>
      <List title={taskTitle} content={taskContent}
            link={<Link to={`/users/${taskCreatedUserId}`}>{taskCreatedUserName}</Link>}
      />
      <EditTaskButton />
      <DeleteTaskButton />
    </ListCover>
  )
}