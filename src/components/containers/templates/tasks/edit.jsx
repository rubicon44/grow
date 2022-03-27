import React from 'react';
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
`

export function TaskEditTemplate(props) {
  const id = props.id;
  const title = props.title;
  const content = props.content;
  const current_user_id = props.current_user_id;

  return (
    <React.Fragment>
      <Header />
      <Main>
        <TaskUpdateForm id={id} title={title} content={content} current_user_id={current_user_id} />
      </Main>
    </React.Fragment>
  );
}