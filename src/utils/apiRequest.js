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

  const options = {
    method: reqTypes,
  };

  if (!isFormData && body) {
    options.body = JSON.stringify(body);
    options.headers['Content-Type'] = 'application/json';
  }

  const data = await fetch(url, options);

  return await data.json();
};
