import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import jwt_decode from "jwt-decode";
// スタイリング
import './assets/styles/reset.css';
// 認証用Context
import { AuthProvider } from './auth/authProvider';
import { PrivateRoute } from './auth/privateRoute';
import { auth } from './infra/firebase.js';
// 認証前・サインイン・サインアップ
import { Top } from './components/containers/pages/static_pages/top';
import { SignInWithRouter } from './components/containers/pages/static_pages/sign_in';
import { SignUpWithRouter } from './components/containers/pages/static_pages/sign_up';
// タスク
import { TaskIndex } from './components/containers/pages/tasks/taskIndex';
import { TaskShow } from './components/containers/pages/tasks/taskShow';
import { TaskCreate } from './components/containers/pages/tasks/taskCreate';
import { TaskEdit } from './components/containers/pages/tasks/taskEdit';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  async componentWillMount() {
    if( localStorage.getItem('token') === '' || localStorage.getItem('token') === null || Date.now() >= jwt_decode(localStorage.getItem('token')).exp * 1000 ){
      await auth.signOut();
    }
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
              <Route exact path="/sign_in" component={SignInWithRouter} />
              <Route exact path="/sign_up" component={SignUpWithRouter} />
              {/* task */}
              <PrivateRoute exact path="/tasks" component={TaskIndex} />
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
