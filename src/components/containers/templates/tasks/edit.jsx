import React from 'react';
import PropTypes from 'prop-types';
import { Main } from '../Main';
import { Header } from '../../organisms/Header';
import { TaskUpdateForm } from '../../organisms/tasks/TaskForm/UpdateForm';

export const TaskEditTemplate = (props) => {
  return (
    <>
      <Header />
      <Main>
        <TaskUpdateForm {...props}/>
      </Main>
    </>
  );
};

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