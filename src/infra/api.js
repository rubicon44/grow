import axios from 'axios';
import { currentUser } from './current_user';
axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
const token_auth = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = token_auth;

export const signUp = (params) => axios.post(`/users`, params );

export const signIn = (idToken) => axios({
	method: 'post',
	url: `/users/sign_in`,
	headers: {
		idToken: idToken
	}
});

// get CurrentUser
export const getCurrentUser = () => axios({
  method: 'get',
  url: `/users/${currentUser.id}`,
  params: {'current_user': true},
});

// tasks
export const getTasks = (params) => axios({
  method: 'get',
  url: `/tasks`,
  params: params,
});

export const postTasks = (params) => axios.post(`/tasks`, params );

export const getTask = (params) => axios({
  method: 'get',
  url: `/tasks/${params}`,
});

export const updateTask = (params, data) => axios({
  method: 'put',
  url: `/tasks/${params}`,
  data: data,
});

export const deleteTask = (params) => axios({
  method: 'delete',
  url: `/tasks/${params}`,
  params: params,
});