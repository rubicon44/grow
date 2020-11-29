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
import Top from './components/containers/pages/static_pages/top';
import Login from './components/containers/pages/static_pages/login';
import Registration from './components/containers/pages/static_pages/registration';
// タスク
import Task from './components/containers/pages/tasks/index';
import TaskShow from './components/containers/pages/tasks/show';
import TaskCreate from './components/containers/pages/tasks/create';
import TaskEdit from './components/containers/pages/tasks/edit';

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
              <Route exact path="/taskCreate" component={TaskCreate} />
              <Route exact path="/task/:id" component={TaskEdit} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
