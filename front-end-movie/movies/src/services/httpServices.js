import axios from "axios";
import config from "../config.json";

axios.defaults.baseURL = config.apiUrl;

function setCommonHeader(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}

const httpService = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
  patch: axios.patch,
  setCommonHeader,
};

export default httpService;
