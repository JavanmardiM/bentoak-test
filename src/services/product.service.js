import _axios from "axios";

const instance = _axios.create({
  baseURL: process.env.REACT_APP_API_URL_PRODUCT,
});

const productAxios = {
  instance: instance,

  getProducts(skip, limit) {
    return instance.get(
      `/products${skip ? "?skip=" + skip : ""}${skip ? "&limit=" + limit : ""}`
    );
  },
};
export default productAxios;
