import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTask, deleteTask } from '../../../../infra/api';

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

const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f7f3;
`

const Title = styled.h1`
  width: 288px;
  font-size: 36px;
  font-family: YuMincho;
`

// task一覧表示
const TaskListCover = styled.div``

const TaskList = styled.dl`
  margin-top: 30px;
  text-align: left;

  > dt {
    font-weight: bold;
  }

  > dd {
    min-height: 100px;
    min-width: 180px;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #bbb;
  }
`

class TaskShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    // <Link to="~">により保存された「location.pathname」から「task_id」を取得
    const location = this.props.location.pathname.split("/");
    const task_id = location[location.length -1];

    getTask(task_id)
    .then(results => {
      this.setState({
        tasks: results.data
      });
    })
    .catch(data => {
      console.log(data);
    });
  }

  edit = (id) => {
    this.props.history.push({
      pathname: `/task/${id}`,
      state: {
        id: id,
        title: this.state.tasks.title,
        content: this.state.tasks.content,
      },
    });
  }

  delete = (id) => {
    deleteTask(id)
    .then(results => {
      this.setState({
        tasks: results.data
      });
    })
    .catch(data => {
      console.log(data);
    });
    this.props.history.push("/tasks");
  }

  render() {
    return (
      <div className="App">
        <Head>
          <ButtonStyle to="/tasks">一覧へ戻る</ButtonStyle>
        </Head>
        <LoginBackground>
          <Title>Grow</Title>
          <h2>タスク詳細</h2>

          <TaskListCover>
            <TaskList>
              <dt>{this.state.tasks.title}</dt>
              <dd>{this.state.tasks.content}</dd>
            </TaskList>
            <button onClick={() => this.edit(this.state.tasks.id)}>編集</button>
            <button onClick={() => this.delete(this.state.tasks.id)}>削除</button>
          </TaskListCover>
        </LoginBackground>
      </div>
    )
  }
};

export default TaskShow;