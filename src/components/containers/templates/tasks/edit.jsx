import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { TaskUpdateForm } from '../../organisms/tasks/updateForm';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #ddd;
`;

export function TaskEditTemplate(props) {
  const { id } = props;
  const { title } = props;
  const { content } = props;
  const { currentUserId } = props;

  return (
    <>
      <Header />
      <Main>
        <TaskUpdateForm
          id={id}
          title={title}
          content={content}
          currentUserId={currentUserId}
        />
      </Main>
    </>
  );
}

TaskEditTemplate.defaultProps = {
  id: 0,
  title: '',
  content: '',
  currentUserId: '',
};

TaskEditTemplate.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  currentUserId: PropTypes.string,
};
