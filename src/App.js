import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { signOut } from "firebase/auth";
import jwt_decode from "jwt-decode";
// スタイリング
import './assets/styles/reset.css';
// 認証用Context
import { AuthProvider } from './auth/authProvider';
import { PrivateRoute } from './auth/privateRoute';
import { auth } from './infra/firebase.js';
// 認証前・サインイン・サインアップ・NotFound
import { Top } from './components/containers/pages/static_pages/top';
import { SignIn } from './components/containers/pages/static_pages/sign_in';
import { SignUp } from './components/containers/pages/static_pages/sign_up';
import { NotFound } from './components/containers/pages/static_pages/notFound';
// タスク
import { TaskIndex } from './components/containers/pages/tasks/taskIndex';
import { TaskShow } from './components/containers/pages/tasks/taskShow';
import { TaskCreate } from './components/containers/pages/tasks/taskCreate';
import { TaskEdit } from './components/containers/pages/tasks/taskEdit';

export function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setTimeout(() => setLoading(false), 1000)
    setLoading(false)

    if( localStorage.getItem('token') === '' || localStorage.getItem('token') === null || Date.now() >= jwt_decode(localStorage.getItem('token')).exp * 1000 ){
      signOut(auth);
    }
  }, []);

  if(loading) {
    return(<div>Loading...</div>)
  } else {
    return (
      <div className="App">
        <AuthProvider>
          <Router>
            <Routes>
              {/* top・サインイン・サインアップ・NotFound */}
              <Route exact path="/" element={<Top />} />
              <Route exact path="/top" element={<Top />} />
              <Route exact path="/sign_in" element={<SignIn />} />
              <Route exact path="/sign_up" element={<SignUp />} />
              <Route exact path="*" element={<NotFound />} />
              {/* task */}
              <Route exact path="/tasks" element={<PrivateRoute element={<TaskIndex />} />} />
              <Route exact path="/tasks/:id" element={<PrivateRoute element={<TaskShow />} />} />
              <Route exact path="/tasks/create" element={<PrivateRoute element={<TaskCreate />} />} />
              <Route exact path="/tasks/edit/:id" element={<PrivateRoute element={<TaskEdit />} />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    );
  }
}
