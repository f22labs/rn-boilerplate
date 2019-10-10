import { BASE_API_URL } from 'react-native-dotenv';

const ApiConfig = {
  baseUrl: BASE_API_URL,
  urls: {
    users: {
      get: '/users/profile',
      update: '/users/${id}',
    },
  },
};

export default ApiConfig;
