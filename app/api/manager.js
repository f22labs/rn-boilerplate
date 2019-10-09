import axios from 'axios';
import NavigationService from '../navigation/NavigationService';
import {User} from '../store';
import {BASE_API_URL} from 'react-native-dotenv';

/**
 * Create an Axios Client with defaults
 */
const axiosClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
});

/**
 * Request Wrapper with default success/error actions
 */
const Api = async (
  config = {method: 'GET', data: {}, url: ''},
  shouldAppendToken = true,
) => {
  // Success
  const onSuccess = response => {
    console.log('Request Successful!', response.data);
    return Promise.resolve(response.data);
  };

  // Error
  const onError = error => {
    console.log('Request Failed:', error);
    if (error.response.status === 401) {
      /**
       * If 401
       * Clear the token from offline store
       * and navigate to Initial Stack using Navigation Service
       */
      User.clearToken();
    }

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.log('Data:', error.response.data);
      return Promise.reject(error.response.data);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.log('Error Message:', error.message);
      return Promise.reject(error.message);
    }
  };

  // Append headers
  let headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Append auth token
  if (shouldAppendToken) {
    try {
      const token = await User.getToken();
      headers['Access-Token'] = token;
    } catch (error) {
      // Token is not found
      console.log('Error Message:', error.message);

      return Promise.reject(error.message);
    }
  }

  // Set headers
  axiosClient.defaults.headers = headers;

  console.log('Request Headers!', axiosClient.defaults.headers);
  console.log('Request Configurations!', config);

  return axiosClient(config)
    .then(onSuccess)
    .catch(onError);
};

export default Api;
