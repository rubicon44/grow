import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { current_uid } from '../../../../infra/firebase.js';
import { postTasks } from '../../../../infra/api';
import { Header } from '../../organisms/header';

const BackButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;

  > svg {
    cursor: pointer;
  }
`

const TopBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 460px;
  text-align: center;
  background-color: #ddd;
`

const Title = styled.h2`
  width: 288px;
  color: #ff444f;
  font-size: 36px;
  font-family: YuMincho;
`

const FormCover = styled.div`
  min-width: 260px;
  padding: 0 10px;
  text-align: left;
`

const FormTitleCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
  }

  > input {
    min-width: 260px;
  }
`

const FormTextAreaCover = styled.div`
  margin-bottom: 10px;

  > label {
    display: block;
  }

  > textarea {
    min-width: 260px;
    min-height: 200px;
  }
`

const FormButtonCover = styled.div`
  display: flex;
  justify-content: flex-end;
`

export function TaskCreate() {
  const navigate = useNavigate();
  let [task, setTask] = useState([]);
  let [title, setTitle] = useState([]);
  let [content, setContent] = useState([]);

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  const postTasksFunc = useCallback((task) => {
    postTasks(task)
    .then(response => {
      console.log(response.data);
    })
    .catch(response => {
      console.log(response.data);
    });
  }, []);

  const [load, setLoad] = useState(false);
  const handleTextSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setLoad(true);
    task = { 'title': title, 'content': content, 'user_id': current_uid };
    setTask(task);
    postTasksFunc(task);
    setLoad(false)
    navigate("/tasks");
  }

  return (
    <div>
      <Header />
      <BackButtonCover>
        <ArrowBackIosIcon onClick={handleBackButtonClick} />
      </BackButtonCover>
      <TopBackground>
        <Title>新規登録</Title>
        <FormCover>
          <form onSubmit={handleTextSubmit}>
            <FormTitleCover>
              <label htmlFor="title">題名:</label>
              <input type="text" name="title" value={title} onChange={ (e) => { setTitle(e.target.value) }} placeholder="Title" />
            </FormTitleCover>
            <FormTextAreaCover>
              <label htmlFor="content">内容:</label>
              <textarea name="content" onChange={ (e) => { setContent(e.target.value) }} placeholder="Content" cols="80" rows="3" value={content}></textarea>
            </FormTextAreaCover>
            <FormButtonCover><button type="submit" disabled={load}>作成</button></FormButtonCover>
          </form>
        </FormCover>
      </TopBackground>
    </div>
  );
}