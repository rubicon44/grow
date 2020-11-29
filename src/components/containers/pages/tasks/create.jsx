import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { postTasks } from '../../../../infra/api';

const Head = styled.div`
  display: flex;
  justify-content: flex-end;

  // todo:子要素にそのままmarginを当てたくないため、「親要素Coverの子要素のaタグ」へのスタイリング指定を行う。
  > a:first-of-type {
    margin-right: 10px;
  }
`

const ButtonStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: #ff444f;
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

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      title: '',
      content: '',
    }
  }

  handleTextChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);

    const task = { 'title': this.state.title, 'content': this.state.content }
    this.setState({
      task: task,
    });
  }

  handleTextSubmit = (e) => {
    e.preventDefault();
    const { task } = this.state;

    postTasks(task)
    .then(results => {
      this.setState({
        title: '',
        content: '',
      });
    })
    .catch(data => {
      console.log(data);
    });
    this.props.history.push("/tasks");
  }

  render() {
    const { title, content } = this.state;

    return (
      <div>
        <Head>
          <ButtonStyle to="/tasks">一覧へ戻る</ButtonStyle>
        </Head>
        <TopBackground>
          <Title>新規登録</Title>
          <FormCover>
            <form onSubmit={this.handleTextSubmit}>
              <FormTitleCover>
                <label htmlFor="title">題名:</label>
                <input type="text" name="title" value={title} onChange={this.handleTextChange} placeholder="Title" />
              </FormTitleCover>
              <FormTextAreaCover>
                <label htmlFor="content">内容:</label>
                <textarea name="content" onChange={this.handleTextChange} placeholder="Content" cols="80" rows="3" value={content}></textarea>
              </FormTextAreaCover>
              <FormButtonCover><button type="submit">登録</button></FormButtonCover>
            </form>
          </FormCover>
        </TopBackground>
      </div>
    );
  }
}

export default Create;