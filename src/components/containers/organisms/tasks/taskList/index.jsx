import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTask } from 'infra/api';
import { getTask } from 'infra/api';
import { currentUser } from 'infra/currentUser';
import { LikeButton } from 'components/containers/organisms/Likes/LikeButton';
import { TaskStatusSwitch } from 'components/containers/organisms/Tasks/logic/TaskStatusSwitch';
import { TitleWithBackArrowHeader } from 'components/presentational/molecules/Header/TitleWithBackArrowHeader';
import { List } from 'components/presentational/molecules/List';

export const TaskList = () => {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const currentTaskId = locationPathName[locationPathName.length - 1];
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
  const { user_id: taskCreatedUserId } = taskData.task;
  const { nickname: taskCreatedUserNickName } = taskData.taskCreatedUser;

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
    await navigate(`/${taskData.taskCreatedUserName}`);
  };

  const MemoButtonCover = React.memo(() => {
    return (
      <ButtonCover>
        <EditTaskButton />
        <DeleteTaskButton />
      </ButtonCover>
    )
  });

  const MemoTitleWithBackArrowHeader = React.memo(() => {
    return <TitleWithBackArrowHeader>タスク詳細</TitleWithBackArrowHeader>;
  });

  const MemoList = React.memo(List);
  const TaskDetail = () => {
    return (
      <>
      <MemoTitleWithBackArrowHeader />
      <ListCover>
        <MemoList
          title={taskTitle}
          titleUrl={`/${taskData.taskCreatedUserName}/tasks/${String(taskData.task.id)}`}
          content={taskContent}
          url={`/${taskData.taskCreatedUserName}`}
          text={taskCreatedUserNickName}
        />
        <TaskStatusSwitch taskStatus={taskStatus} />
        <div>開始日:{startDate}</div>
        <div>終了日:{endDate}</div>
        <LikeButton taskId={String(taskId)} currentUserId={String(currentUserId)} />
        <MemoButtonCover />
      </ListCover>
      </>
    )
  };
  return (
    <>
      <TaskDetail />
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
};

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