import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { getTask, deleteTask } from '../../../../infra/api';
import { Header } from '../../organisms/header';

const BackButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;

  > svg {
    cursor: pointer;
  }
`

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

const Title = styled.h2`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

// task一覧表示
const TaskListCover = styled.div``

const TaskList = styled.dl`
  margin-top: 30px;
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    min-width: 180px;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #bbb;
  }
`

export function TaskShow() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const [task, setTask] = useState([]);
  const [taskCreatedUser, setTaskCreatedUser] = useState("");
  const task_id = locationPathName[locationPathName.length -1];
  const [taskTitle, setTaskTitle] = useState([]);
  const [taskContent, setTaskContent] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTask(task_id)
    .then(response => {
      console.log(response.data);
      if (isMounted) setTaskTitle(response.data.title);
      if (isMounted) setTaskContent(response.data.content);
      if (isMounted) setTask(response.data);
      if (isMounted) setTaskCreatedUser(response.data.user);
    })
    .catch(data => {
      console.log(data);
    });
    return () => { isMounted = false };
  }, [taskTitle, taskContent]);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const editTaskFunc = (id, currentUserId) => {
    navigate(`/tasks/edit/${id}`, {
      state: {
        id: id,
        title: task.title,
        content: task.content,
        current_user_id: currentUserId,
      },
    });
  };

  const deleteTaskFunc = useCallback((id) => {
    deleteTask(id)
    .then(response => {
      console.log(response.data);
      console.log("正常に削除されました。");
    })
    .catch(response => {
      console.log(response.data);
    });
    navigate(`/users/${taskCreatedUser.id}`);
  }, [taskCreatedUser]);

  const EditTaskButton = () => {
    const taskCreateUserId = task.user_id;
    let currentUserDataText =localStorage.getItem('user');
    const currentUserData = JSON.parse(currentUserDataText);
    const currentUserId = currentUserData['id'].toString();

    if (taskCreateUserId === currentUserId) {
      return <button onClick={() => editTaskFunc(task.id, currentUserId)}>編集</button>;
    } else {
      return null;
    }
  }

  const DeleteTaskButton = () => {
    const taskCreateUserId = task.user_id;
    let currentUserDataText =localStorage.getItem('user');
    const currentUserData = JSON.parse(currentUserDataText);
    const currentUserId = currentUserData['id'].toString();

    if (taskCreateUserId === currentUserId) {
      return <button onClick={() => deleteTaskFunc(task.id)}>削除</button>;
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Header />
      <BackButtonCover>
        <ArrowBackIosIcon onClick={handleBackButtonClick} />
      </BackButtonCover>
      <LoginBackground>
        <Title>タスク詳細</Title>

        <TaskListCover>
          <TaskList>
            <dt>{task.title}</dt>
            <dd>{task.content}</dd>
            <div>
              by:
              <Link to={`/users/${taskCreatedUser.id}`}>{taskCreatedUser.name}</Link>
            </div>
          </TaskList>
          <EditTaskButton />
          <DeleteTaskButton />
        </TaskListCover>
      </LoginBackground>
    </div>
  )
};