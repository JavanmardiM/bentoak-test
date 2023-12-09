import _axios from "axios";

const instance = _axios.create({
  baseURL: process.env.REACT_APP_API_URL_CHART,
});

const chartAxios = {
  instance: instance,

  getPosts(id) {
    return instance.get(`/posts`);
  },
  getComments(id) {
    return instance.get(`/comments`);
  },
};
export default chartAxios;
