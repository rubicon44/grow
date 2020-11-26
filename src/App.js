import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// スタイリング
import './assets/styles/reset.css';
import styled from 'styled-components';
// 認証前・サインイン・サインアップ
import Top from './components/static_pages/containers/pages/top';
import Login from './components/static_pages/containers/pages/login';
import Registration from './components/static_pages/containers/pages/registration';
// タスク
import Task from './components/tasks/containers/pages/task';
import TaskShow from './components/tasks/containers/pages/taskShow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // 初期値は「true」。
      loading: false
    };
  }

  render() {
    if(this.state.loading) {
      return(<div>Loading...</div>)
    } else {
      return (
        <Router>
          <div className="App">
            <Switch>
              {/* top・サインイン・サインアップ */}
              <Route exact path="/" component={Top} />
              <Route exact path="/top" component={Top} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              {/* task */}
              <Route exact path="/tasks" component={Task} />
              <Route exact path="/tasks/:id" component={TaskShow} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
