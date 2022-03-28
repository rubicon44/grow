import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title/title';
import { NextButton } from '../../../presentational/atoms/Button/nextButton';
import { List } from '../../../presentational/molecules/List/list';

const ListCover = styled.div`
  min-width: 180px;
  margin-top: 15px;
`

export function TasksList(props) {
  const tasks = props.tasks;
  return (
    <React.Fragment>
      <Title title="タスク一覧" />
      <NextButton text="タスク登録" url="/tasks/create" />
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

TasksList.propTypes = {
  tasks: PropTypes.array
};