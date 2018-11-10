import axios from 'axios';
import { GET_API_KEY, ADD_API_KEY, DELETE_API_KEY } from './types';

export const getApiKey = () => dispatch => {
  axios.get('/api/projects').then(res =>
    dispatch({
      type: GET_API_KEY,
      payload: res.data
    })
  );
};

export const addApiKey = project => dispatch => {
  axios.post('/api/projects', project).then(res =>
    dispatch({
      type: ADD_PROJECT,
      payload: res.data
    })
  );
};

export const deleteProject = id => dispatch => {
  axios.delete(`/api/projects/${id}`).then(res =>
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    })
  );
};

export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};