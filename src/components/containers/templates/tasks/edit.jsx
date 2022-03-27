import React from 'react';
import styled from 'styled-components';
import { Header } from '../../organisms/header';
import { Title } from '../../../presentational/atoms/Title/title';
import { BackButton } from '../../../presentational/atoms/Button/backButton';
import { TaskUpdateForm } from '../../organisms/tasks/taskUpdateForm';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
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
      <BackButton />
      <Background>
        <Title title="編集" />
        <TaskUpdateForm id={id} title={title} content={content} current_user_id={current_user_id} />
      </Background>
    </React.Fragment>
  );
}