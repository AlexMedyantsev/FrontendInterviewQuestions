import axios from "axios";
import {connect} from "react-redux";
// import {ActionCreator} from "./reducer/notes/notes.js";

// const ErrorCodes = {
//   UNAUTHORIZED: 401,
// };

const createAPI = (onError) => {
  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    timeout: 1000 * 5,
    withCredentials: true,
    url: {
      crossdomain: true
    },
  });

  api.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;
    if (response) {
      onError(response.status);
    } else if (!response) {
      onError(`Отсутствует интернет соединение`);
    }
  };

  api.interceptors.request.use(function (config) {
    const token = 'c81567daa383677274b39b0430295b1d'
    config.headers.Authorization = token;

    return config;
  });

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

const mapStateToProps = {
};

const mapDispatchToProps = {
  // changeErrorFlag: ActionCreator.changeErrorFlag(),
};

export {createAPI};
export default connect(mapStateToProps, mapDispatchToProps)(createAPI);
