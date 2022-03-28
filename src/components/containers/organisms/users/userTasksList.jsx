import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  const taskUser = props.taskUser;
  const userTasks = props.userTasks;
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

UserTasksList.propTypes = {
  taskUser: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  userTasks: PropTypes.array,
};