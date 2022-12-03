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
// export const getCurrentUser = () =>
//   axios({
//     method: 'get',
//     url: `/${currentUser().username}`,
//     params: { currentUser: true },
//   });

export const getUser = (params) =>
  axios({
    method: 'get',
    url: `/${params}`,
    params: { currentUser: true },
  });

export const updateUser = (params, data) =>
  axios({
    method: 'put',
    url: `/${params}`,
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

// relationships
export const postRelationships = (params) =>
  axios({
    method: 'post',
    url: `/users/${params.following_id}/relationships`,
    params,
  });

export const deleteRelationships = (params) =>
  axios({
    method: 'delete',
    url: `/users/${params.following_id}/relationships`,
    params,
  });

export const getFollowings = (params) =>
  axios({
    method: 'get',
    url: `/users/${params}/followings`,
    params,
  });

export const getFollowers = (params) =>
  axios({
    method: 'get',
    url: `/users/${params}/followers`,
    params,
  });

// notifications
export const getNotifications = (params) =>
  axios({
    method: 'get',
    url: `/notifications`,
    params,
  });

// searches
export const getSearches = (params) =>
  axios({
    method: 'get',
    url: `/searches`,
    params,
  });