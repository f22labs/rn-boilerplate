import store from 'react-native-simple-store';

const storeKeys = {
  user: 'user',
};

const User = {
  async setToken(token) {
    await store.save(storeKeys.user, token);
  },
  async getToken() {
    const token = await store.get(storeKeys.user);
    return token ? token : null;
  },
  async clearToken() {
    await store.delete(storeKeys.user);
  },
};

export {User};
