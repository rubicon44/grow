// test

import axios from 'axios';
// import { currentUser } from 'infra/currentUser';

// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 401エラーの場合、ログインページにリダイレクトするなどの処理を行う
    }
    return Promise.reject(error);
  },
);

export const signUp = (params) => api.post('/users', params);

export const signIn = (idToken) =>
  api({
    method: 'post',
    url: '/users/sign_in',
    headers: {
      idToken,
    },
  });

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = true;
// const tokenAuth = localStorage.getItem('token');
// axios.defaults.headers.common.Authorization = tokenAuth;

// export const signUp = (params) => axios.post('/users', params);

// export const signIn = (idToken) =>
//   axios({
//     method: 'post',
//     url: '/users/sign_in',
//     headers: {
//       idToken,
//     },
//   });

// users
// export const getCurrentUser = () =>
//   axios({
//     method: 'get',
//     url: `/${currentUser().username}`,
//     params: { currentUser: true },
//   });

export const getUser = (params) =>
  api({
    method: 'get',
    url: `/${params}`,
    params: { currentUser: true },
  });

export const updateUser = (params, data) =>
  api({
    method: 'put',
    url: `/${params}`,
    data,
  });

// tasks
export const getTasks = (params) =>
  api({
    method: 'get',
    url: '/tasks',
    params,
  });

export const postTasks = (params) => api.post('/tasks', params);

export const getTask = (params) =>
  api({
    method: 'get',
    url: `/tasks/${params}`,
  });

export const updateTask = (params, data) =>
  api({
    method: 'put',
    url: `/tasks/${params}`,
    data,
  });

export const deleteTask = (params) =>
  api({
    method: 'delete',
    url: `/tasks/${params}`,
    params,
  });

// likes
export const postLikes = (params) =>
  api({
    method: 'post',
    url: `/tasks/${params.task_id}/likes`,
    params,
  });

export const getLikes = (params) =>
  api({
    method: 'get',
    url: `/tasks/${params.task_id}/likes`,
    params,
  });

export const deleteLike = (params) =>
  api({
    method: 'delete',
    url: `/tasks/${params.task_id}/likes/${params.like_id}`,
    params,
  });

// relationships
export const postRelationships = (params) =>
  api({
    method: 'post',
    url: `/users/${params.following_id}/relationships`,
    params,
  });

export const deleteRelationships = (params) =>
  api({
    method: 'delete',
    url: `/users/${params.following_id}/relationships`,
    params,
  });

export const getFollowings = (username) =>
  api({
    method: 'get',
    url: `/${username}/followings`,
  });

export const getFollowers = (username) =>
  api({
    method: 'get',
    url: `/${username}/followers`,
  });

// notifications
export const getNotifications = (params) =>
  api({
    method: 'get',
    url: `/notifications`,
    params,
  });

// searches
export const getSearches = (params) =>
  api({
    method: 'get',
    url: `/searches`,
    params,
  });