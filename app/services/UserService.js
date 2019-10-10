import API from '../api/manager';
import config from '../api/config';
import _ from 'lodash';

const get = () => {
  return API({
    method: 'GET',
    url: config.urls.users.get,
  });
};
const update = (id, data) => {
  if (!id) throw Error('Id is a required parameter');
  return API({
    method: 'PUT',
    url: _.template(config.urls.users.get)({ id }),
    data,
  });
};

export const UserService = {
  get,
  post,
  del,
  update,
};
