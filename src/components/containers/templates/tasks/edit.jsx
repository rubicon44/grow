import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #ddd;
`;

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
