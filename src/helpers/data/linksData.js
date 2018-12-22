import axios from 'axios';
import apiKeys from './apiKeys';

const URL = apiKeys.firebaseKeys.databaseURL;

const getLinks = () => new Promise((resolve, reject) => {
  axios.get(`${URL}/links.json`)
    .then((data) => {
      const linksObject = data.data;
      const linksArray = [];
      if (linksObject != null) {
        Object.keys(linksObject).forEach((key) => {
          linksObject[key].id = key;
          linksArray.push(linksObject[key]);
        });
      }
      resolve(linksArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const addLink = newLink => new Promise((resolve, reject) => {
  axios.post(`${URL}/links.json`, JSON.stringify(newLink))
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});

const deleteLink = id => new Promise((resolve, reject) => {
  axios.delete(`${URL}/links/${id}.json`)
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getLinks,
  addLink,
  deleteLink,
};
