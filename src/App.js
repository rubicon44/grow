import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import jwtDecode from 'jwt-decode';
// Style
import './assets/styles/reset.css';
import { mediaquery } from './assets/styles/variable';
// Context for auth
import { auth } from './infra/firebase';
import { AuthProvider } from './auth/authProvider';
import { PrivateRoute } from './auth/privateRoute';
// Auth
import { SignIn } from './components/containers/pages/auth/signIn';
import { SignUp } from './components/containers/pages/auth/signUp';
// Static pages
import { NotFound } from './components/containers/pages/staticPages/notFound';
import { Top } from './components/containers/pages/staticPages/top';
// Tasks
import { TaskIndex } from './components/containers/pages/tasks';
import { TaskCreate } from './components/containers/pages/tasks/create';
import { TaskEdit } from './components/containers/pages/tasks/edit';
import { TaskShow } from './components/containers/pages/tasks/show';
// Users
import { UserGantt } from './components/containers/pages/users/gantt';
import { UserFollowings } from './components/containers/pages/users/followings';
import { UserFollowers } from './components/containers/pages/users/followers';
import { UserShow } from './components/containers/pages/users/show';
// Notifications
import { Notifications } from './components/containers/pages/notifications';
// Searches
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
              {/* Auth */}
              <Route path="/" element={<Top />} />
              <Route path="/top" element={<Top />} />
              <Route path="*" element={<NotFound />} />
              {/* Static pages */}
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              {/* Task */}
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
              {/* User */}
              <Route
                path="/:username"
                element={<PrivateRoute element={<UserShow />} />}
              />
              {/* Gantt chart */}
              <Route
                path="/:username/gantt"
                element={<PrivateRoute element={<UserGantt />} />}
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