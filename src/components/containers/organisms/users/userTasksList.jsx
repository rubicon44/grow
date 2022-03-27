import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List } from '../../../presentational/molecules/List/list';

const ListCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  margin-top: 30px;
`

export function UserTasksList(props) {
  const userTasks = props.userTasks;
  const taskUser = props.taskUser;
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}