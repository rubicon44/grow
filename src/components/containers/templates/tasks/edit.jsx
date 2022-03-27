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
  return (
    <React.Fragment>
      <Header />
      <BackButton />
      <Background>
        <Title title="編集" />
        <TaskUpdateForm id={props.id} title={props.title} content={props.content} current_user_id={props.current_user_id} />
      </Background>
    </React.Fragment>
  );
}