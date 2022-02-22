import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { getTask, deleteTask } from '../../../../infra/api';
import { Header } from '../../organisms/header';

const BackButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
`

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

const Title = styled.h1`
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
  const history = useHistory();
  const location = useLocation();
  const locationPathName = location.pathname.split("/");
  const [tasks, setTasks] = useState([]);
  const task_id = locationPathName[locationPathName.length -1];

  useEffect(() => {
    getTask(task_id)
    .then(results => {
      setTasks(results.data);
    })
    .catch(data => {
      console.log(data);
    });
  }, [tasks.length]);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const editTaskFunc = (id) => {
    history.push({
      pathname: `/tasks/edit/${id}`,
      state: {
        id: id,
        title: tasks.title,
        content: tasks.content,
      },
    });
  };

  const deleteTaskFunc = (id) => {
    deleteTask(id)
    .then(results => {
      setTasks(results.data);
    })
    .catch(data => {
      console.log(data);
    });
    history.push("/tasks");
  };

  const EditTaskButton = () => {
    const taskCreateUserId = tasks.user_id;
    let currentUserDataText =localStorage.getItem('user');
    const currentUserData = JSON.parse(currentUserDataText);
    const currentUserId = currentUserData['firebase_id'];

    if (taskCreateUserId === currentUserId) {
      return <button onClick={() => editTaskFunc(tasks.id)}>編集</button>;
    } else {
      return null;
    }
  }

  const DeleteTaskButton = () => {
    const taskCreateUserId = tasks.user_id;
    let currentUserDataText =localStorage.getItem('user');
    const currentUserData = JSON.parse(currentUserDataText);
    const currentUserId = currentUserData['firebase_id'];

    if (taskCreateUserId === currentUserId) {
      return <button onClick={() => deleteTaskFunc(tasks.id)}>削除</button>;
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
        <Title>Grow</Title>
        <h2>タスク詳細</h2>

        <TaskListCover>
          <TaskList>
            <dt>{tasks.title}</dt>
            <dd>{tasks.content}</dd>
          </TaskList>
          <EditTaskButton />
          <DeleteTaskButton />
        </TaskListCover>
      </LoginBackground>
    </div>
  )
};