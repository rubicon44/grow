import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deleteTask } from '../../../../infra/api';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { List } from '../../../presentational/molecules/List/list';

const ListCover = styled.div`
  min-width: 180px;
  margin-top: 15px;
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

export function TaskList(props) {
  const { task } = props;
  const { id: taskId } = task;
  const { user_id: taskUserId } = task;
  const { title: taskTitle } = task;
  const { content: taskContent } = task;
  const { user_id: taskCreatedUserId } = task;
  const { taskCreatedUser } = props;
  const { name: taskCreatedUserName } = taskCreatedUser;

  const currentUserDataText = localStorage.getItem('user');
  const currentUserData = JSON.parse(currentUserDataText);
  const currentUserId = String(currentUserData.id);

  const navigate = useNavigate();
  const editTaskFunc = (taskId, currentUserId) => {
    navigate(`/tasks/edit/${taskId}`, {
      state: {
        id: taskId,
        title: taskTitle,
        content: taskContent,
        currentUserId,
      },
    });
  };

  const [load, setLoad] = useState(false);
  function EditTaskButton() {
    if (taskCreatedUserId === currentUserId) {
      return (
        <button
          type="button"
          disabled={load}
          onClick={() => editTaskFunc(taskId, currentUserId)}
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
    if (taskCreatedUserId === currentUserId) {
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
    navigate(`/users/${taskCreatedUserId}`);
  };

  return (
    <>
      <ListHeader>
        <BackButton />
        <Title title="タスク詳細" />
      </ListHeader>
      <ListCover>
        <List
          title={taskTitle}
          taskId={String(taskId)}
          content={taskContent}
          taskUserId={String(taskUserId)}
          taskCreatedUserId={String(taskCreatedUserId)}
          taskCreatedUserName={taskCreatedUserName}
        />
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

TaskList.defaultProps = {
  task: {},
  taskCreatedUser: {},
};

TaskList.propTypes = {
  task: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    user_id: PropTypes.string,
    user: PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      email: PropTypes.string,
      firebase_id: PropTypes.string,
      password_digest: PropTypes.string,
      bio: PropTypes.string,
    }),
  }),
  taskCreatedUser: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    email: PropTypes.string,
    firebase_id: PropTypes.string,
    password_digest: PropTypes.string,
    bio: PropTypes.string,
  }),
};
