var axios = require('axios');

var axiosClient = axios.create({
  baseURL: 'http://localhost:3001'
});

export default axiosClient;
