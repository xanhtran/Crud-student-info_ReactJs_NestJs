import axios from "axios";

const callApi= (url,method,data)=>{
  return axios({
    method:method,
    url:url,
    data:data,
  });
}

export default callApi;
