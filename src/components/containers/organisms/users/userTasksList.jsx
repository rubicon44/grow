import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { Title } from '../../../presentational/atoms/Title/title';
import { LogOutButton } from '../../../presentational/atoms/Button/logOut';
import { List } from '../../../presentational/molecules/List/list';
import { ProfileSwitch } from './profileSwitch';
import { TaskStatusSwitch } from '../tasks/taskStatusSwitch';
import { FollowButton } from './followButton';

export function UserTasksList(props) {
  const location = useLocation();
  const locationPathName = location.pathname.split('/');
  const userNameInUrl = locationPathName[locationPathName.length - 1];

  const { taskUser } = props;
  const { userTasks } = props;
  const { userLikedTasks } = props;
  const { taskCreatedUser } = props;
  const { currentUserId } = props;
  const { currentUserName } = props;
  const { currentUserAble } = props;

  const navigate = useNavigate();
  const nextGunttFunc = () => {
    navigate(`/${taskUser.username}/guntt`, {
      state: {
        taskUser: taskUser,
        userTasks: userTasks,
      },
    });
  };

  const nextFollowingsFunc = () => {
    navigate(`/${taskUser.username}/followings`, {
      state: {
        userId: taskUser.id,
      },
    });
  };

  const nextFollowersFunc = () => {
    navigate(`/${taskUser.username}/followers`, {
      state: {
        userId: taskUser.id,
      },
    });
  };

  return (
    <>
      <ContentHeaderCover>
        <ContentHeader>
          <BackButton />
          <Title title={taskUser.nickname} />
        </ContentHeader>
        <FollowButton />
        <ProfileSwitch currentUserId={String(currentUserId)} />
        <RelationshipsCover>
          <a onClick={() => nextFollowingsFunc()}>
            <span>フォロー中</span>
          </a>
          <a onClick={() => nextFollowersFunc()}>
            <span>フォロワー</span>
          </a>
        </RelationshipsCover>
      </ContentHeaderCover>
      <Content>
        <NextGunttLink
          type="button"
          onClick={() => nextGunttFunc(currentUserId)}
        >
          ガントチャート
        </NextGunttLink>
        {userTasks.length === 0 ? (
          <ListCover key={userTasks}>
            <div>まだ投稿はありません。</div>
          </ListCover>
        ) : (
          userTasks.map((task) => (
            <ListCoverWrapper>
              <ListCover key={task.id}>
                <List
                  taskId={String(task.id)}
                  title={task.title}
                  content={task.content}
                  taskUserId={String(taskUser.id)}
                  taskCreatedUserId={String(taskUser.id)}
                  taskCreatedUserName={String(taskUser.username)}
                  taskCreatedUserNickName={taskUser.nickname}
                />
                <TaskStatusSwitch taskStatus={task.status} />
              </ListCover>
            </ListCoverWrapper>
          ))
        )}

        <LikedTask>いいねしたタスク</LikedTask>
        {userLikedTasks.length === 0 ? (
          <ListCover key={userLikedTasks}>
            <div>まだいいねはありません。</div>
          </ListCover>
        ) : (
          userLikedTasks.map((task) => (
            // todo: この方法はあまり綺麗ではない気がする(特にAPIでのデータの返し方を再考したい)。
            // 下記方法だと、自分の投稿をいいねした場合、いいねリストに同じタスクが重複してしまう。
            taskCreatedUser.map((user) => (
              String(task.user_id) === String(user.id) && (
                <ListCoverWrapper>
                  <ListCover key={task.id}>
                    <List
                      taskId={String(task.id)}
                      title={task.title}
                      content={task.content}
                      taskUserId={String(taskUser.id)}
                      taskCreatedUserName={user.username}
                      taskCreatedUserNickName={user.nickname}
                    />
                    {console.log("task.user_id:" + task.user_id)}
                    {console.log("user.id:" + user.id)}
                    <TaskStatusSwitch taskStatus={task.status} />
                  </ListCover>
                </ListCoverWrapper>
              )
            ))
          ))
        )}
      </Content>
      {String(currentUserName) === String(userNameInUrl) && (
        <LogOutButtonCover>
          {currentUserAble && <LogOutButton text="ログアウト" />}
        </LogOutButtonCover>
      )}
    </>
  );
}

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

const RelationshipsCover = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  > a {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > a:last-of-type {
    margin-left: 10px;
  }
`;

const NextGunttLink = styled.button`
  font-size: 22px;
  font-weight: bold;
  font-family: YuMincho;
  color: #ff444f;
  text-decoraiton: none;
`;

const LikedTask = styled.div`
  margin: 30px 0;
  padding-top: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  border-top: 1px solid #ddd;
`;

const ListCoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-top: 30px;
`;

const ListCover = styled.div`
  position: relative;
`;

UserTasksList.defaultProps = {
  taskUser: {},
  userTasks: [],
  currentUserId: '',
  currentUserAble: false,
};

UserTasksList.propTypes = {
  taskUser: PropTypes.exact({
    id: PropTypes.number,
    nickname: PropTypes.string,
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
        status: PropTypes.number,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
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
      status: PropTypes.number,
      start_date: PropTypes.string,
      end_date: PropTypes.string,
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
