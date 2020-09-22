import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
      headers: { Authorization: localStorage.getItem("token")},
      baseURL: "https://secret-family-recipes-bw.herokuapp.com/"
  })
};

export default axiosWithAuth;