import axios from 'axios';
axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;

// get list tasks
export const getTasks = (params) => axios({
  method: 'get',
  url: `/tasks`,
  params: params,
});

// create task
export const postTasks = (params) => axios.post(`/tasks`, params );

// get task detail
export const getTask = (params) => axios({
  method: 'get',
  url: `/tasks/${params}`,
});

// delete task
export const deleteTask = (params) => axios({
  method: 'delete',
  url: `/tasks/${params}`,
  params: params,
});

// update task
export const updateTask = (params, data) => axios({
  method: 'put',
  url: `/tasks/${params}`,
  data: data,
});

// get current username