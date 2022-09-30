import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTask } from '../../../../infra/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask } from '../../../../infra/api';
import { Title } from '../../../presentational/atoms/Title';
import { BackArrow } from '../../../presentational/atoms/Arrow/backArrow';
import { List } from '../../../presentational/molecules/List';
import { TaskStatusSwitch } from './taskStatusSwitch';
import { LikeButton } from '../likes/likeButton';

export function TaskList() {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const currentTaskId = locationPathName[locationPathName.length - 1];
  const [task, setTask] = useState([]);
  const [taskCreatedUser, setTaskCreatedUser] = useState([]);
  const [taskCreatedUserName, setTaskCreatedUserName] = useState();
  useEffect(() => {
    let isMounted = true;
    getTask(currentTaskId)
      .then((response) => {
        if (isMounted) setTask(response.data);
        if (isMounted) setTaskCreatedUser(response.data.user);
        if (isMounted) setTaskCreatedUserName(response.data.user.username);
      })
      .catch();
    // .catch((data) => {
    // });
    return () => {
      isMounted = false;
    };
  }, [currentTaskId]);

  const { id: taskId } = task;
  const { title: taskTitle } = task;
  const { content: taskContent } = task;
  const { status: taskStatus } = task;
  const { start_date: startDate } = task;
  const { end_date: endDate } = task;
  const { user_id: taskCreatedUserId } = task;
  const { nickname: taskCreatedUserNickName } = taskCreatedUser;

  const currentUserDataText = localStorage.getItem('user');
  const currentUserData = JSON.parse(currentUserDataText);
  const currentUserId = String(currentUserData.id);
  const currentUserName = String(currentUserData.username);

  const navigate = useNavigate();
  const editTaskFunc = (taskId, currentUserName) => {
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
  function EditTaskButton() {
    if (String(taskCreatedUserId) === currentUserId) {
      return (
        <button
          type="button"
          disabled={load}
          onClick={() => editTaskFunc(taskId, currentUserName)}
        >
          編集
        </button>
      );
    }
    return null;
  }

  const [deleteCheckAble, setDeleteCheckAble] = useState(false);
  const deleteCheckFunc = () => {
    setLoad(true);
    setDeleteCheckAble(true);
  };

  function DeleteTaskButton() {
    if (String(taskCreatedUserId) === currentUserId) {
      return (
        <button type="button" onClick={() => deleteCheckFunc()}>
          削除
        </button>
      );
    }
    return null;
  }

  const unDeleteCheckFunc = () => {
    setLoad(false);
    setDeleteCheckAble(false);
  };

  const deleteTaskFunc = (taskId) => {
    deleteTask(taskId).then().catch();
    // .catch((response) => {
    // });
    setLoad(false);
    navigate(`/${taskCreatedUserName}`);
  };

  return (
    <>
      <ListHeader>
        <BackArrow />
        <Title title="タスク詳細" />
      </ListHeader>
      <ListCover>
        <List
          title={taskTitle}
          titleUrl={`/${taskCreatedUserName}/tasks/${String(task.id)}`}
          content={taskContent}
          url={`/${taskCreatedUserName}`}
          text={taskCreatedUserNickName}
        />
        <TaskStatusSwitch taskStatus={taskStatus} />
        <div>開始日:{startDate}</div>
        <div>終了日:{endDate}</div>
        <LikeButton taskId={String(taskId)} currentUserId={String(currentUserId)} />
        <ButtonCover>
          <EditTaskButton />
          <DeleteTaskButton />
        </ButtonCover>
      </ListCover>
      {deleteCheckAble === true && (
        <BackgroundDisAbledCover>
          <BackgroundDisAbled>
            <div>本当に削除しますか?</div>
            <button type="button" onClick={() => deleteTaskFunc(taskId)}>
              はい
            </button>
            <button type="button" onClick={() => unDeleteCheckFunc()}>
              いいえ
            </button>
          </BackgroundDisAbled>
        </BackgroundDisAbledCover>
      )}
    </>
  );
}

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

const ListHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

const ButtonCover = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;

const BackgroundDisAbledCover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ddd;
`;

const BackgroundDisAbled = styled.div`
  margin: 30px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;