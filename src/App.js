import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from 'firebase/auth';
import jwtDecode from 'jwt-decode';
import { QueryClient, QueryClientProvider } from 'react-query';
// Style
import './assets/styles/reset.css';
import { mediaquery } from './assets/styles/variable';
// Context for auth
import { auth } from './infra/firebase';
import { AuthProvider } from './auth/AuthProvider';
import { PrivateRoute } from './auth/PrivateRoute';
// Auth
import { SignIn } from './components/containers/pages/Auth/SignIn';
import { SignUp } from './components/containers/pages/Auth/SignUp';
// Static pages
import { NotFound } from './components/containers/pages/StaticPages/NotFound';
import { Top } from './components/containers/pages/StaticPages/Top';
// Tasks
import { Tasks } from './components/containers/pages/Tasks';
import { TaskCreate } from './components/containers/pages/Tasks/TaskCreate';
import { TaskEdit } from './components/containers/pages/Tasks/TaskEdit';
import { TaskShow } from './components/containers/pages/Tasks/TaskShow';
// Users
import { UserGantt } from './components/containers/pages/Users/UserGantt';
import { UserFollowings } from './components/containers/pages/Users/UserFollowings';
import { UserFollowers } from './components/containers/pages/Users/UserFollowers';
import { UserShow } from './components/containers/pages/Users/UserShow';
// Notifications
import { Notifications } from './components/containers/pages/Notifications';
// Searches
import { Searches } from './components/containers/pages/Searches';

const queryClient = new QueryClient();
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       suspense: true,
//     },
//   },
// });

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
  };
  return (
    <Wrapper>
      <PageWrapper>
        <QueryClientProvider client={queryClient}>
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
                  element={<PrivateRoute element={<Tasks />} />}
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
                  path="/searches"
                  element={<PrivateRoute element={<Searches />} />}
                />
              </Routes>
            </Router>
          </AuthProvider>
        </QueryClientProvider>
      </PageWrapper>
    </Wrapper>
  );
};

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