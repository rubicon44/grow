import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { Title } from '../../../presentational/atoms/Title/title';
import { LogOutButton } from '../../../presentational/atoms/Button/logOut';
import { List } from '../../../presentational/molecules/List/list';
import { ProfileSwitch } from './profileSwitch';

const Content = styled.article`
  border-top: 1px solid #ddd;
  width: 100%;
`;

const LogOutButtonCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-top: 1px solid #000;
  box-sizing: border-box;
`;

const ContentHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`;

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 260px;
  padding: 30px 10px 0;
  text-align: center;
  background-color: #f8f7f3;
`;

const ListCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-top: 30px;
`;

export function UserTasksList(props) {
  const { taskUser } = props;
  const { userTasks } = props;
  const { currentUserId } = props;
  const { currentUserAble } = props;
  return (
    <>
      <ContentHeaderCover>
        <ContentHeader>
          <BackButton />
          <Title title={taskUser.name} />
        </ContentHeader>
        <ProfileSwitch />
      </ContentHeaderCover>
      <Content>
        {userTasks.length === 0 ? (
          <ListCover key={userTasks}>
            <div>まだ投稿はありません。</div>
          </ListCover>
        ) : (
          userTasks.map((task) => (
            <ListCover key={task.id}>
              <List
                taskId={String(task.id)}
                title={task.title}
                content={task.content}
                taskUserId={String(taskUser.id)}
                taskCreatedUserId={String(taskUser.id)}
                taskCreatedUserName={taskUser.name}
              />
            </ListCover>
          ))
        )}
      </Content>
      {currentUserId === String(taskUser.id) && (
        <LogOutButtonCover>
          {currentUserAble && <LogOutButton text="ログアウト" />}
        </LogOutButtonCover>
      )}
    </>
  );
}

UserTasksList.defaultProps = {
  taskUser: {},
  userTasks: [],
  currentUserId: '',
  currentUserAble: false,
};

UserTasksList.propTypes = {
  taskUser: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    email: PropTypes.string,
    firebase_id: PropTypes.string,
    password_digest: PropTypes.string,
    bio: PropTypes.string,
    tasks: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        created_at: PropTypes.string,
        updated_at: PropTypes.string,
        user_id: PropTypes.string,
      })
    ),
  }),
  userTasks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      user_id: PropTypes.string,
    })
  ),
  currentUserId: PropTypes.string,
  currentUserAble: PropTypes.bool,
  // currentUser: PropTypes.exact({
  //   uid: PropTypes.string,
  //   email: PropTypes.string,
  // }),
};
