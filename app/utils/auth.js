import { AsyncStorage } from 'react-native';
import axios from 'axios';
import endpoint from '../config/endpoint';

const STORAGE_KEY = '@outvote:token';

export function resetToken() {
  clearToken();
}

export function setHeader(tokens) {
  axios.defaults.baseURL = endpoint.apiUrl;
  axios.defaults.headers.common['access-token'] = tokens['access-token'];
  axios.defaults.headers.common.uid = tokens.uid;
  axios.defaults.headers.common.client = tokens.client;
  axios.defaults.headers.common.accept = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.post.accept = 'application/json';
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
}

export function clearToken() {
  delete axios.defaults.headers.common['access-token'];
  delete axios.defaults.headers.common.uid;
  delete axios.defaults.headers.common.client;
  AsyncStorage.removeItem(STORAGE_KEY);
}

export async function getToken() {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);

    if (value !== null) {
      setHeader(JSON.parse(value));
    }
    return value;
  } catch (e) {
    return null;
  }
}
