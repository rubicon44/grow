import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../../../presentational/atoms/Title/title';
import { NextButton } from '../../../presentational/atoms/Button/nextButton';
import { List } from '../../../presentational/molecules/List/list';
import { TaskStatusSwitch } from './taskStatusSwitch';
import { LikeButton } from '../likes/likeButton';

const ListCover = styled.div`
  position: relative;
  min-width: 180px;
  margin-top: 30px;
`;

export function TasksList(props) {
  const { tasks } = props;
  const { currentUserId } = props;
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
            startDate={task.start_date}
            endDate={task.end_date}
            taskCreatedUserId={String(task.user.id)}
            taskCreatedUserNickName={task.user.nickname}
          />
          <TaskStatusSwitch taskStatus={task.status} />
          <LikeButton taskId={String(task.id)} currentUserId={String(currentUserId)} />
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
        nickname: PropTypes.string,
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
