import axios from 'axios';
import apiKeys from './apiKeys';

const URL = apiKeys.firebaseKeys.databaseURL;

const getLinks = (uid) => new Promise((resolve, reject) => {
  axios.get(`${URL}/links.json?orderBy="uid"&equalTo="${uid}"`)
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

const updateStatus = (id, status) => new Promise((resolve, reject) => {
  axios.patch(`${URL}/links/${id}.json`, { status })
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
  updateStatus,
};
