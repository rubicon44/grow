import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getTasks } from '../../../../infra/api';

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
    margin: 10px 0;
    padding: 5px;
    border: 1px solid #bbb;
  }
`

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  componentDidMount() {
    getTasks()
    .then(results => {
      this.setState({
        tasks: results.data
      });
    })
    .catch(data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <LoginBackground>
          <Title>Grow</Title>
          <h2>タスク一覧</h2>

          <TaskListCover>
            {this.state.tasks.map((task) => {
              return (
                <TaskList key={task.id}>
                  <dt key={task.id}>
                    <Link to={`tasks/${task.id}`}>{task.title}</Link>
                  </dt>
                  <dd key={task.id}>{task.content}</dd>
                </TaskList>
              );
            })}
          </TaskListCover>
        </LoginBackground>
      </div>
    )
  }
};

export default Task;