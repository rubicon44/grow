import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { TasksList } from '../../organisms/tasks/tasksList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  background-color: #f8f7f3;
`

export function TaskIndexTemplate(props) {
  const tasks = props.tasks;
  return (
    <React.Fragment>
      <Header />
      <Main>
        <TasksList tasks={tasks} />
      </Main>
    </React.Fragment>
  )
};

TasksList.propTypes = {
  tasks: PropTypes.array
};