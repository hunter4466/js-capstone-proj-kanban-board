// ----------------------------Imports---------------------------

import './Assets/Styles/_styles.scss';
import './Assets/Styles/modules/_boxes.scss';
import './Assets/Styles/modules/_buttons.scss';
import './Assets/Styles/modules/_inputs.scss';
import logo from './Assets/Images/Logos/logo.png';

import fetchPics from './Assets/Javascript/fetch';
import { get, saveComments } from './Assets/Javascript/get';
import { buildStructure, buildModals } from './Assets/Javascript/buildHTML';

// ----------------------------Variables---------------------------

const logoImg = document.getElementById('logo_img');
const breedCats = ['abys', 'aege', 'abob', 'amau', 'amis', 'bamb', 'bslo', 'cspa', 'beng'];
const api = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GTdCo4dMv7OdJ4VT5RJ0/likes';
const commentsApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GTdCo4dMv7OdJ4VT5RJ0/comments?item_id=';
const toBuildArray = [];

// ----------------------------Assignations---------------------------

logoImg.src = logo;

// ----------------------------Callbacks---------------------------

const loader = async () => {
  await fetchPics(api, breedCats, toBuildArray);
  const commentsArray = await saveComments(commentsApi, breedCats);
  const likesArray = await get(likesApi);
  setTimeout(() => {
    buildStructure(toBuildArray, likesArray);
    buildModals(toBuildArray, commentsArray);
  }, 2000);
};
loader();

// ----------------------------Event Listeners---------------------------
