import { store } from '../store/store';

export const API_REQ_TYPES = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const apiRequest = async (
  endpoint,
  reqTypes = API_REQ_TYPES.GET,
  body,
  isFormData
) => {
  const host = 'http://127.0.0.1:8000/';
  const url = host + endpoint;
  const token = store.getState().user?.token;

  const options = {
    method: reqTypes,
  };

  if (isFormData && body) {
    options.body = body;
  } else if (!isFormData && body) {
    options.body = JSON.stringify(body);
    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const res = await fetch(url, options);

  if (reqTypes === API_REQ_TYPES.DELETE && !(await res.text())) {
    return {
      status: 'success',
    };
  }
  return await res.json();
};
