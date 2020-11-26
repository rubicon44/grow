import axios from 'axios';
axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;

// get list tasks
export const getTasks = (params) => axios({
  method: 'get',
  url: `/tasks`,
  params: params,
});

// get task detail
export const getTask = (params) => axios({
  method: 'get',
  url: `/tasks/${params}`,
});