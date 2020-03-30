import axios from 'axios';
import * as R from 'ramda';
import camelCaseKeys from 'camelcase-keys';

const apiKeyLens = R.lensPath(['params', 'api_key']);

export const api = axios.create({
  baseURL: 'https://api.nasa.gov/',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  transformResponse: [camelCaseKeys],
});

api.interceptors.request.use(R.set(apiKeyLens, process.env.API_KEY));
