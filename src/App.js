import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import jwtDecode from 'jwt-decode';
// スタイリング
import './assets/styles/reset.css';
import { mediaquery } from './assets/styles/variable';
// 認証用Context
import { AuthProvider } from './auth/authProvider';
import { PrivateRoute } from './auth/privateRoute';
import { auth } from './infra/firebase';
// 認証前・サインイン・サインアップ・NotFound
import { Top } from './components/containers/pages/staticPages/top';
import { SignIn } from './components/containers/pages/staticPages/signIn';
import { SignUp } from './components/containers/pages/staticPages/signUp';
import { NotFound } from './components/containers/pages/staticPages/notFound';
// タスク
import { TaskIndex } from './components/containers/pages/tasks';
import { TaskShow } from './components/containers/pages/tasks/show';
import { TaskCreate } from './components/containers/pages/tasks/create';
import { TaskEdit } from './components/containers/pages/tasks/edit';
// ユーザー
import { UserShow } from './components/containers/pages/users/show';
import { UserGuntt } from './components/containers/pages/users/guntt';
import { UserFollowings } from './components/containers/pages/users/followings';
import { UserFollowers } from './components/containers/pages/users/followers';
// 通知
import { Notifications } from './components/containers/pages/notifications';
// 検索
import { SearchIndex } from './components/containers/pages/search';

export const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => setLoading(false), 1000)
    setLoading(false);
    if (
      localStorage.getItem('token') === '' ||
      localStorage.getItem('token') === null ||
      Date.now() >= jwtDecode(localStorage.getItem('token')).exp * 1000
    ) {
      signOut(auth);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <PageWrapper>
        <AuthProvider>
          <Router>
            <Routes>
              {/* top・サインイン・サインアップ・NotFound */}
              <Route path="/" element={<Top />} />
              <Route path="/top" element={<Top />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
              {/* task */}
              <Route
                path="/tasks"
                element={<PrivateRoute element={<TaskIndex />} />}
              />
              <Route
                path="/tasks/create"
                element={<PrivateRoute element={<TaskCreate />} />}
              />
              <Route
                path="/tasks/edit/:id"
                element={<PrivateRoute element={<TaskEdit />} />}
              />
              {/* user */}
              <Route
                path="/:username"
                element={<PrivateRoute element={<UserShow />} />}
              />
              {/* GunttChart */}
              <Route
                path="/:username/guntt"
                element={<PrivateRoute element={<UserGuntt />} />}
              />
              <Route
                path="/:username/tasks/:id"
                element={<PrivateRoute element={<TaskShow />} />}
              />
              {/* Relationships */}
              <Route
                path="/:username/followings"
                element={<PrivateRoute element={<UserFollowings />} />}
              />
              <Route
                path="/:username/followers"
                element={<PrivateRoute element={<UserFollowers />} />}
              />
              {/* Notifications */}
              <Route
                path="/notifications"
                element={<PrivateRoute element={<Notifications />} />}
              />
              {/* Searches */}
              <Route
                path="/search"
                element={<PrivateRoute element={<SearchIndex />} />}
              />
            </Routes>
          </Router>
        </AuthProvider>
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageWrapper = styled.div`
  min-width: 320px;
  max-width: 320px;
  min-height: 700px;
  background-color: #eeeff1;
  ${mediaquery.desktop`
    max-width: 1280px;
  `}
`;