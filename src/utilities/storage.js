export const storage = {
  getRegisterdList: () => JSON.parse(localStorage.getItem("registerdList")),
  setRegisterdList: (registerdList) => {
    localStorage.setItem("registerdList", JSON.stringify(registerdList));
  },
  getToken: () => JSON.parse(localStorage.getItem("token")),
  setToken: (token) => {
    localStorage.setItem("token", JSON.stringify(token));
  },
  clearToken: () => localStorage.removeItem("token"),
};
