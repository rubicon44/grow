import React, { Component } from 'react';
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { getTask, deleteTask } from '../../../../infra/api';
import Header from '../../organisms/header';

const BackButtonCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30px;
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

  componentDidUpdate() {
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

  handleBackButtonClick = () => {
    this.props.history.goBack();
  };

  edit = (id) => {
    this.props.history.push({
      pathname: `/tasks/edit/${id}`,
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
        <Header />
        <BackButtonCover>
          <ArrowBackIosIcon onClick={this.handleBackButtonClick} />
        </BackButtonCover>
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