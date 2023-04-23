// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const api = axios.create({
  baseURL: 'http://localhost:8080',
});
