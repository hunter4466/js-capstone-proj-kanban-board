import './Assets/Styles/_styles.scss';
import './Assets/Styles/modules/_boxes.scss';
import './Assets/Styles/modules/_buttons.scss';
import './Assets/Styles/modules/_inputs.scss';
import logo from './Assets/Images/Logos/logo.png';

import getInfo from './Assets/Javascript/get';
import buildStructure from './Assets/Javascript/buildHTML';

const logoImg = document.getElementById('logo_img');
logoImg.src = logo;
const breedCats = ['abys', 'aege', 'abob', 'amau', 'amis', 'bamb', 'bslo', 'cspa', 'beng'];
const api = 'https://api.thecatapi.com/v1/images/search?breed_ids=';

const toBuildArray = [];

const fetchPics = () => {
  breedCats.forEach(async (e) => {
    await fetch(api + e)
      .then((response) => response.json())
      .then((json) => {
        toBuildArray.push(json[0]);
      });
  });
};
fetchPics();

setTimeout(() => { buildStructure(toBuildArray); }, 1000);
setTimeout(() => { getInfo(toBuildArray); }, 1000);

const iApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/likes';

const test = async () => {
  await fetch(iApi, {
    method: 'POST',
    body: JSON.stringify({
      item_id: 'Breed#1',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((json) => {
      console.log(json);
    });
};

test();
