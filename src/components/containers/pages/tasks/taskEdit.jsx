import React, { useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { updateTask } from '../../../../infra/api';
import { Header } from '../../organisms/header';

const BackButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
`

const TopBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  text-align: center;
  background-color: #ddd;
`

const Title = styled.h1`
  width: 288px;
  color: #ff444f;
  font-size: 36px;
  font-family: YuMincho;
`

const FormCover = styled.div`
  width: 300px;
  text-align: left;
`

const FormTitleCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
  }

  > input {
    width: 300px;
  }
`

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
  }

  > textarea {
    width: 300px;
    min-height: 200px;
  }
`

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`

export function TaskEdit() {
  const history = useHistory();
  const location = useLocation();
  let [id, setId] = useState([]);
  let [task, setTask] = useState([]);
  let [title, setTitle] = useState([]);
  let [content, setContent] = useState([]);

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const updateTaskFunc = useCallback((id, task) => {
    updateTask(id, task)
    .then(response => {
      console.log(response.data);
    })
    .catch(response => {
      console.log(response.data);
    });
  }, []);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    id = location.state.id;
    task = { 'title': title, 'content': content };
    setId(id);
    setTask(task);
    updateTaskFunc(id, task);
    history.push(`/tasks/${location.state.id}`);
  }

  return (
    <div>
      <Header />
      <BackButtonCover>
        <ArrowBackIosIcon onClick={handleBackButtonClick} />
      </BackButtonCover>
      <TopBackground>
        <Title>編集</Title>
        <FormCover>
          <form onSubmit={handleTextSubmit}>
            <FormTitleCover>
              <label htmlFor="title">題名:</label>
              <input type="text" name="title" defaultValue={location.state.title} onChange={ (e) => { setTitle(e.target.value) }} placeholder="Title" />
            </FormTitleCover>
            <FormTextAreaCover>
              <label htmlFor="content">内容:</label>
              <textarea name="content" onChange={ (e) => { setContent(e.target.value) }} placeholder="Content" cols="80" rows="3" defaultValue={location.state.content}></textarea>
            </FormTextAreaCover>
            <FormButtonCover><button type="submit">編集</button></FormButtonCover>
          </form>
        </FormCover>
      </TopBackground>
    </div>
  );
}