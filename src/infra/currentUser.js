export const currentUser =
  localStorage.getItem('user') !== null && localStorage.getItem('user') !== ''
    ? JSON.parse(localStorage.getItem('user'))
    : '';
