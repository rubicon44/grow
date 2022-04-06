import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title/title';
import { NextButton } from '../../../presentational/atoms/Button/nextButton';
import { List } from '../../../presentational/molecules/List/list';
import { TaskStatusSwitch } from './taskStatusSwitch';

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 15px;
`;

export function TasksList(props) {
  const { tasks } = props;
  return (
    <>
      <Title title="タスク一覧" />
      <NextButton text="タスク登録" url="/tasks/create" />
      {tasks.map((task) => (
        <ListCover key={task.id}>
          <List
            taskUserId={task.user_id}
            taskId={String(task.id)}
            title={task.title}
            content={task.content}
            taskCreatedUserId={String(task.user.id)}
            taskCreatedUserName={task.user.name}
          />
          <TaskStatusSwitch taskStatus={task.status} />
        </ListCover>
      ))}
    </>
  );
}

TasksList.defaultProps = {
  tasks: [],
};

TasksList.propTypes = {
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
    })
  ),
};
