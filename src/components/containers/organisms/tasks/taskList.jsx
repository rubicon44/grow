import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTask } from '../../../../infra/api';
import styled from 'styled-components';
import { deleteTask } from '../../../../infra/api';
import { currentUser } from '../../../../infra/currentUser';
import { TitleWithBackArrowHeader } from '../../../presentational/molecules/Header/titleWithBackArrowHeader';
import { List } from '../../../presentational/molecules/List';
import { TaskStatusSwitch } from './taskStatusSwitch';
import { LikeButton } from '../likes/likeButton';

export const TaskList = () => {
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

  const currentUserId = currentUser().id;
  const currentUserName = currentUser().username;

  const navigate = useNavigate();
  const editTaskFunc = () => {
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
  const EditTaskButton = () => {
    if (String(taskCreatedUserId) === currentUserId) {
      return (<button type="button" disabled={load} onClick={editTaskFunc}>編集</button>);
    }
    return null;
  }

  const [deleteCheckAble, setDeleteCheckAble] = useState(false);
  const deleteCheckFunc = () => {
    setLoad(true);
    setDeleteCheckAble(true);
  };

  const DeleteTaskButton = () => {
    if (String(taskCreatedUserId) === currentUserId) {
      return (<button type="button" onClick={deleteCheckFunc}>削除</button>);
    }
    return null;
  }

  const unDeleteCheckFunc = () => {
    setLoad(false);
    setDeleteCheckAble(false);
  };

  const deleteTaskFunc = async () => {
    await deleteTask(taskId).then().catch();
    setLoad(false);
    await navigate(`/${taskCreatedUserName}`);
  };

  return (
    <>
      <TitleWithBackArrowHeader>タスク詳細</TitleWithBackArrowHeader>
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
            <button type="button" onClick={deleteTaskFunc}>はい</button>
            <button type="button" onClick={unDeleteCheckFunc}>いいえ</button>
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