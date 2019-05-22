/**
 * @author jack
 * @date 2019-05-11
 */
import Qs from 'qs';
import axios from '@utils/axiosUtils';

export function postLoginApi(data) {
  const response = axios.post(
    '/login',
    Qs.stringify({
      username: data.username,
      password: data.password,
    }),
  );
  return response;
}
