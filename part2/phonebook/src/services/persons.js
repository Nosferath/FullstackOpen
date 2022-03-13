import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const promise = axios.get(baseUrl);
  return promise.then((response) => response.data);
};

const create = (newObject) => {
  const promise = axios.post(baseUrl, newObject);
  return promise.then((response) => response.data);
};

const remove = (object) => {
  const promise = axios.delete(`${baseUrl}/${object.id}`);
  return promise.then((response) => response.data);
};

const put = (object) => {
  const promise = axios.put(`${baseUrl}/${object.id}`, object);
  return promise.then((response) => response.data);
};

const personsService = {
  getAll: getAll,
  create: create,
  remove: remove,
  put: put,
};

export default personsService;
