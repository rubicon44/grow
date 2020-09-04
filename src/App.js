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
import Top from './components/containers/pages/top';
import Login from './components/containers/pages/login';
import Registration from './components/containers/pages/registration';

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
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header> */}
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App;
