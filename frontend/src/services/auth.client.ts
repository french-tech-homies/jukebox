import axios from 'axios';
import Cookies from 'js-cookie';

const AUTHZ_COOKIE = 'authz';
const API_URL = 'http://localhost:4000';
const client = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

client.interceptors.request.use(
  request => {
    const bearer = Cookies.get(AUTHZ_COOKIE);
    console.log('bearer', bearer);
    request.headers.authorization = `Bearer ${bearer}`;
    return request;
  },
  error => Promise.reject(error)
);

export { client as authClient };
