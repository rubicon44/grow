import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../organisms/header';
import { Main } from '../main';
import { TaskUpdateForm } from '../../organisms/tasks/updateForm';

export function TaskEditTemplate(props) {
  const { id } = props;
  const { title } = props;
  const { content } = props;
  const { status } = props;
  const { startDate } = props;
  const { endDate } = props;
  const { currentUserName } = props;

  return (
    <>
      <Header />
      <Main>
        <TaskUpdateForm
          id={id}
          title={title}
          content={content}
          status={status}
          startDate={startDate}
          endDate={endDate}
          currentUserName={currentUserName}
        />
      </Main>
    </>
  );
}

TaskEditTemplate.defaultProps = {
  id: 0,
  title: '',
  content: '',
  start_date: '',
  end_date: '',
  status: 0,
  currentUserId: '',
};

TaskEditTemplate.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  status: PropTypes.number,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  currentUserId: PropTypes.string,
};
