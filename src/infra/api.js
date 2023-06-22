import axios from "axios";
import Cookies from "js-cookie";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
const tokenAuth = Cookies.get("token");
axios.defaults.headers.common.Authorization = tokenAuth;

const setCSRFToken = async () => {
  try {
    const response = await axios.get("/v1/csrf_token");
    const csrfToken = response.data.csrf_token.value;
    if (csrfToken) {
      axios.defaults.headers.common["X-CSRF-Token"] = csrfToken;
      axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
      return csrfToken;
    }
    return null;
  } catch (error) {
    alert("Failed to get CSRF token:", error);
    throw error;
  }
};

export const signUp = async (params) => {
  await setCSRFToken();
  return axios.post("/v1/users", snakecaseKeys(params));
};

export const signIn = async (idToken) => {
  await setCSRFToken();
  return axios({
    method: "post",
    url: "/v1/users/sign_in",
    headers: { Authorization: idToken },
  });
};

export const getUser = async (currentPathSegment, dataType, page, pageSize) =>
  axios({
    method: "get",
    url: `/v1/${currentPathSegment}`,
    params: snakecaseKeys({ currentUser: true, dataType, page, pageSize }),
  }).then((response) => camelcaseKeys(response, { deep: true }));

export const updateUser = async (params, data) => {
  await setCSRFToken();
  return axios({
    method: "put",
    url: `/v1/${params}`,
    data: snakecaseKeys(data),
  }).then((response) => camelcaseKeys(response, { deep: true }));
};

export const getTasks = async (params) =>
  axios({
    method: "get",
    url: "/v1/tasks",
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, { deep: true }));

export const postTasks = async (params) => {
  await setCSRFToken();
  return axios.post("/v1/tasks", snakecaseKeys(params));
};

export const getTask = async (params) =>
  axios({
    method: "get",
    url: `/v1/tasks/${params}`,
  }).then((response) => camelcaseKeys(response, { deep: true }));

export const updateTask = async (params, data) => {
  await setCSRFToken();
  return axios({
    method: "put",
    url: `/v1/tasks/${params}`,
    data: snakecaseKeys(data),
  }).then((response) => camelcaseKeys(response, { deep: true }));
};

// TODO: dataに具体性を持たせる。
export const deleteTask = async (params, data) => {
  await setCSRFToken();
  return axios({
    method: "delete",
    url: `/v1/tasks/${params}`,
    data: snakecaseKeys(data),
  });
};

// likes
export const postLikes = async (params) => {
  await setCSRFToken();
  return axios({
    method: "post",
    url: `/v1/tasks/${params.taskId}/likes`,
    params: snakecaseKeys(params),
  });
};

export const getLikes = async (params) =>
  axios({
    method: "get",
    url: `/v1/tasks/${params.taskId}/likes`,
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, { deep: true }));

export const deleteLike = async (params) => {
  await setCSRFToken();
  return axios({
    method: "delete",
    url: `/v1/tasks/${params.taskId}/likes/${params.id}`,
    params: snakecaseKeys(params),
  });
};

// relationships
export const postRelationships = async (params) => {
  await setCSRFToken();
  return axios({
    method: "post",
    url: `/v1/users/${params.followingId}/relationships`,
    params: snakecaseKeys(params),
  });
};

export const deleteRelationships = async (params) => {
  await setCSRFToken();
  return axios({
    method: "delete",
    url: `/v1/users/${params.followingId}/relationships`,
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, { deep: true }));
};

export const getFollowings = async (username) =>
  axios({
    method: "get",
    url: `/v1/${username}/followings`,
  }).then((response) => camelcaseKeys(response, { deep: true }));

export const getFollowers = async (username) =>
  axios({
    method: "get",
    url: `/v1/${username}/followers`,
  }).then((response) => camelcaseKeys(response, { deep: true }));

// notifications
export const getNotifications = async (params) =>
  axios({
    method: "get",
    url: `/v1/notifications`,
    params: snakecaseKeys(params),
  }).then((response) => camelcaseKeys(response, { deep: true }));

// searches
export const getSearches = async (searchData, dataType, page, pageSize) =>
  axios({
    method: "get",
    url: `/v1/searches`,
    params: snakecaseKeys({
      model: searchData.model,
      contents: searchData.contents,
      method: searchData.method,
      dataType,
      page,
      pageSize,
    }),
  }).then((response) => camelcaseKeys(response, { deep: true }));
