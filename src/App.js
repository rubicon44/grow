import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// スタイリング
import './assets/styles/reset.css';
// 認証用Context
import { AuthProvider } from './auth/authProvider';
import PrivateRoute from './auth/privateRoute';
// 認証前・サインイン・サインアップ
import Top from './components/containers/pages/static_pages/top';
import SignIn from './components/containers/pages/static_pages/sign_in';
import SignUp from './components/containers/pages/static_pages/sign_up';
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
        <AuthProvider>
          <Router>
            <div className="App">
              {/* top・サインイン・サインアップ */}
              <Route exact path="/" component={Top} />
              <Route exact path="/top" component={Top} />
              <Route exact path="/sign_in" component={SignIn} />
              <Route exact path="/sign_up" component={SignUp} />
              {/* task */}
              <PrivateRoute exact path="/tasks" component={Task} />
              <PrivateRoute exact path="/tasks/:id(\d+)" component={TaskShow} />
              <PrivateRoute exact path="/tasks/create" component={TaskCreate} />
              <PrivateRoute exact path="/tasks/edit/:id(\d+)" component={TaskEdit} />
            </div>
          </Router>
        </AuthProvider>
      );
    }
  }
}

export default App;
