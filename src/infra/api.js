import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';
// axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
const tokenAuth = localStorage.getItem('token');
axios.defaults.headers.common.Authorization = tokenAuth;

export const signUp = (params) => axios.post('/v1/users', snakecaseKeys(params));

export const signIn = (idToken) =>
  axios({
    method: 'post',
    url: '/v1/users/sign_in',
    headers: { idToken },
  });

export const getUser = (params) =>
  axios({
    method: 'get',
    url: `/v1/${params}`,
    params: { currentUser: true },
  }).then((response) => camelcaseKeys(response, {deep: true}));

export const updateUser = (params, data) =>
  axios({
    method: 'put',
    url: `/v1/${params}`,
    data: snakecaseKeys(data),
  }).then((response) => camelcaseKeys(response, {deep: true}));

// tasks
export const getTasks = (params) =>
  axios({
    method: 'get',
    url: '/v1/tasks',
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, {deep: true}));

export const postTasks = (params) => axios.post('/v1/tasks', snakecaseKeys(params));

export const getTask = (params) =>
  axios({
    method: 'get',
    url: `/v1/tasks/${params}`,
  }).then((response) => camelcaseKeys(response, {deep: true}));

export const updateTask = (params, data) =>
  axios({
    method: 'put',
    url: `/v1/tasks/${params}`,
    data: snakecaseKeys(data),
  }).then((response) => camelcaseKeys(response, {deep: true}));

export const deleteTask = (params) =>
  axios({
    method: 'delete',
    url: `/v1/tasks/${params}`,
  });

// likes
export const postLikes = (params) =>
  axios({
    method: 'post',
    url: `/v1/tasks/${params.taskId}/likes`,
    params: snakecaseKeys(params),
  });

export const getLikes = (params) =>
  axios({
    method: 'get',
    url: `/v1/tasks/${params.taskId}/likes`,
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, {deep: true}));

export const deleteLike = (params) =>
  axios({
    method: 'delete',
    url: `/v1/tasks/${params.taskId}/likes/${params.id}`,
    params: snakecaseKeys(params),
  });

// relationships
export const postRelationships = (params) =>
  axios({
    method: 'post',
    url: `/v1/users/${params.followingId}/relationships`,
    params: snakecaseKeys(params),
  });

export const deleteRelationships = (params) =>
  axios({
    method: 'delete',
    url: `/v1/users/${params.followingId}/relationships`,
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, {deep: true}));

export const getFollowings = (username) =>
  axios({
    method: 'get',
    url: `/v1/${username}/followings`,
  }).then((response) => camelcaseKeys(response, {deep: true}));

export const getFollowers = (username) =>
  axios({
    method: 'get',
    url: `/v1/${username}/followers`,
  }).then((response) => camelcaseKeys(response, {deep: true}));

// notifications
export const getNotifications = (params) =>
  axios({
    method: 'get',
    url: `/v1/notifications`,
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, {deep: true}));

// searches
export const getSearches = (params) =>
  axios({
    method: 'get',
    url: `/v1/searches`,
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, {deep: true}));