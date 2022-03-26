import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List } from '../../../presentational/molecules/List/list';

const ListCover = styled.div`
  min-width: 180px;
  margin-top: 30px;
`

export function TasksList(props) {
  const tasks = props.tasks;
  return (
    <React.Fragment>
      {tasks.map((task) => {
        return (
          <ListCover key={task.id}>
            <List title={<Link to={`/users/${task.user_id}/tasks/${task.id}`}>{task.title}</Link>}
                  content={task.content}
                  link={<Link to={`/users/${task.user.id}`}>{task.user.name}</Link>}
            />
          </ListCover>
        );
      })}
    </React.Fragment>
  )
}