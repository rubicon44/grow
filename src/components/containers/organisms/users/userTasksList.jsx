import React from 'react';
import { Link } from 'react-router-dom';
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
`

const LogOutButtonCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-top: 1px solid #000;
  box-sizing: border-box;
`

const ContentHeader = styled.div`
  display: flex;
  width: 100%;

  > h2 {
    width: 100%;
    margin-right: 45px;
  }
`

const ContentHeaderCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px 0;
  text-align: center;
  background-color: #f8f7f3;
`

const ListCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-top: 30px;
`

export function UserTasksList(props) {
  const taskUser = props.taskUser;
  const userTasks = props.userTasks;
  const currentUserId = props.currentUserId;
  const currentUser = props.currentUser;
  return (
    <React.Fragment>
      <ContentHeaderCover>
        <ContentHeader>
          <BackButton />
          <Title title={taskUser.name} />
        </ContentHeader>
        <ProfileSwitch />
      </ContentHeaderCover>
      <Content>
      {userTasks.length === 0
        ? <ListCover key={userTasks}><div>まだ投稿はありません。</div></ListCover>
        : userTasks.map((task) => {
          return (
            <ListCover key={task.id}>
              <List title={<Link to={`tasks/${task.id}`}>{task.title}</Link>}
                    content={task.content}
                    link={<Link to={`/users/${taskUser.id}`}>{taskUser.name}</Link>}
              />
            </ListCover>
          );
        })
      }
      </Content>
      {currentUserId === taskUser.id &&
        <LogOutButtonCover>
          { currentUser && <LogOutButton text="ログアウト" /> }
        </LogOutButtonCover>
      }
    </React.Fragment>
  )
}

UserTasksList.propTypes = {
  taskUser: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  userTasks: PropTypes.array,
  currentUserId: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
  ]),
  currentUser: PropTypes.object
};