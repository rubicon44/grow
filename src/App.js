import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { QueryClient, QueryClientProvider } from "react-query";
// Style
import "./assets/styles/reset.css";
// Context for auth
import { auth } from "./infra/firebase";
import { AuthContextProvider } from "./auth/AuthContextProvider";
import { PrivateRoute } from "./auth/PrivateRoute";
// Context for others
import { HeaderContextProvider } from "./context/HeaderContextProvider";
import { UserDataContextProvider } from "./context/UserDataContextProvider";
// Auth
import { SignIn } from "./components/containers/pages/auth/SignIn";
import { SignUp } from "./components/containers/pages/auth/SignUp";
// Static pages
import { NotFound } from "./components/containers/pages/staticPages/NotFound";
import { Top } from "./components/containers/pages/staticPages/Top";
// Tasks
import { Tasks } from "./components/containers/pages/tasks/Tasks";
import { TaskCreate } from "./components/containers/pages/tasks/TaskCreate";
import { TaskEdit } from "./components/containers/pages/tasks/TaskEdit";
import { TaskShow } from "./components/containers/pages/tasks/TaskShow";
// Users
import { UserGantt } from "./components/containers/pages/users/UserGantt";
import { UserFollowings } from "./components/containers/pages/users/UserFollowings";
import { UserFollowers } from "./components/containers/pages/users/UserFollowers";
import { UserShow } from "./components/containers/pages/users/UserShow";
// Notifications
import { Notifications } from "./components/containers/pages/notifications/Notifications";
// Searches
import { Searches } from "./components/containers/pages/searches/Searches";

const queryClient = new QueryClient();

export const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => setLoading(false), 1000)
    setLoading(false);
    const token = Cookies.get("token");
    if (!token || token === "" || Date.now() >= jwtDecode(token).exp * 1000) {
      Cookies.remove("token");
      signOut(auth);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthContextProvider>
          <HeaderContextProvider>
            <Routes>
              {/* Static pages */}
              <Route path="/" element={<Top />} />
              <Route path="/top" element={<Top />} />
              <Route path="*" element={<NotFound />} />
              {/* Auth */}
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              {/* Task */}
              <Route
                path="/tasks"
                element={
                  <PrivateRoute
                    element={
                      <UserDataContextProvider>
                        <Tasks />
                      </UserDataContextProvider>
                    }
                  />
                }
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
                element={
                  <PrivateRoute
                    element={
                      <UserDataContextProvider>
                        <UserShow />
                      </UserDataContextProvider>
                    }
                  />
                }
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
              <Route
                path="/:username/gantt"
                element={
                  <PrivateRoute
                    element={
                      <UserDataContextProvider>
                        <UserGantt />
                      </UserDataContextProvider>
                    }
                  />
                }
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
          </HeaderContextProvider>
        </AuthContextProvider>
      </Router>
    </QueryClientProvider>
  );
};
