import axios from 'axios';
import { currentUser } from './currentUser';

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
const tokenAuth = localStorage.getItem('token');
axios.defaults.headers.common.Authorization = tokenAuth;

export const signUp = (params) => axios.post('/users', params);

export const signIn = (idToken) =>
  axios({
    method: 'post',
    url: '/users/sign_in',
    headers: {
      idToken,
    },
  });

// users
export const getCurrentUser = () =>
  axios({
    method: 'get',
    url: `/users/${currentUser.id}`,
    params: { currentUser: true },
  });

export const getUser = (params) =>
  axios({
    method: 'get',
    url: `/users/${params}`,
    params: { currentUser: true },
  });

export const updateUser = (params, data) =>
  axios({
    method: 'put',
    url: `/users/${params}`,
    data,
  });

// tasks
export const getTasks = (params) =>
  axios({
    method: 'get',
    url: '/tasks',
    params,
  });

export const postTasks = (params) => axios.post('/tasks', params);

export const getTask = (params) =>
  axios({
    method: 'get',
    url: `/tasks/${params}`,
  });

export const updateTask = (params, data) =>
  axios({
    method: 'put',
    url: `/tasks/${params}`,
    data,
  });

export const deleteTask = (params) =>
  axios({
    method: 'delete',
    url: `/tasks/${params}`,
    params,
  });

// likes
export const postLikes = (params) =>
  axios({
    method: 'post',
    url: `/tasks/${params.task_id}/likes`,
    params,
  });

export const getLikes = (params) =>
  axios({
    method: 'get',
    url: `/tasks/${params.task_id}/likes`,
    params,
  });

export const deleteLike = (params) =>
  axios({
    method: 'delete',
    url: `/tasks/${params.task_id}/likes/${params.like_id}`,
    params,
  });