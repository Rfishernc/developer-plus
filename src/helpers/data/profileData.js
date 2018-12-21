import axios from 'axios';
import apiKeys from './apiKeys';

const URL = 'https://api.github.com';

const getUserData = user => new Promise((resolve, reject) => {
  axios
    .get(`${URL}/users/${user}?client_id=${apiKeys.githubKeys.clientId}&client_secret=${apiKeys.githubKeys.clientSecret}`)
    .then((result) => {
      const userData = result.data;
      console.log(userData);
      resolve(userData);
    })
    .catch(err => reject(err));
});

const getCommits = user => new Promise((resolve, reject) => {
  axios
    .get(`${URL}/users/${user}/events?client_id=${apiKeys.githubKeys.clientId}&client_secret=${apiKeys.githubKeys.clientSecret}`)
    .then((result) => {
      console.log(result);
      resolve(result);
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getUserData,
  getCommits,
};
