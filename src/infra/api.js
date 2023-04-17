import axios from 'axios';
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
const tokenAuth = localStorage.getItem('token');
axios.defaults.headers.common.Authorization = tokenAuth;

export const signUp = (params) => axios.post('/users', params);

export const signIn = (idToken) =>
  axios({
    method: 'post',
    url: '/v1/users/sign_in',
    headers: {
      idToken,
    },
  });

export const getUser = (params) =>
  axios({
    method: 'get',
    url: `/v1/${params}`,
    params: { currentUser: true },
  });

export const updateUser = (params, data) =>
  axios({
    method: 'put',
    url: `/v1/${params}`,
    data,
  });

// tasks
export const getTasks = (params) =>
  axios({
    method: 'get',
    url: '/v1/tasks',
    params,
  });

export const postTasks = (params) => axios.post('/v1/tasks', params);

export const getTask = (params) =>
  axios({
    method: 'get',
    url: `/v1/tasks/${params}`,
  });

export const updateTask = (params, data) =>
  axios({
    method: 'put',
    url: `/v1/tasks/${params}`,
    data,
  });

export const deleteTask = (params) =>
  axios({
    method: 'delete',
    url: `/v1/tasks/${params}`,
  });

// likes
export const postLikes = (params) =>
  axios({
    method: 'post',
    url: `/v1/tasks/${params.task_id}/likes`,
    params,
  });

export const getLikes = (params) =>
  axios({
    method: 'get',
    url: `/v1/tasks/${params.task_id}/likes`,
    params,
  });

export const deleteLike = (params) =>
  axios({
    method: 'delete',
    url: `/v1/tasks/${params.task_id}/likes/${params.like_id}`,
    params,
  });

// relationships
export const postRelationships = (params) =>
  axios({
    method: 'post',
    url: `/v1/users/${params.following_id}/relationships`,
    params,
  });

export const deleteRelationships = (params) =>
  axios({
    method: 'delete',
    url: `/v1/users/${params.following_id}/relationships`,
    params,
  });

export const getFollowings = (username) =>
  axios({
    method: 'get',
    url: `/v1/${username}/followings`,
  });

export const getFollowers = (username) =>
  axios({
    method: 'get',
    url: `/v1/${username}/followers`,
  });

// notifications
export const getNotifications = (params) =>
  axios({
    method: 'get',
    url: `/v1/notifications`,
    params,
  });

// searches
export const getSearches = (params) =>
  axios({
    method: 'get',
    url: `/v1/searches`,
    params,
  });