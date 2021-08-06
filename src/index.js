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
const breedCats = ['abys', 'aege', 'aege', 'amau', 'amis', 'bamb', 'bslo', 'cspa', 'beng'];
const api = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/likes';
const commentsApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/comments?item_id=';
const toBuildArray = [];
let commentsArray = [];
// ----------------------------Assignations---------------------------

logoImg.src = logo;

// ----------------------------Callbacks---------------------------
let likesArray;
setTimeout(() => { get(likesApi).then((val) => { likesArray = val; }); }, 1000);
fetchPics(api, breedCats, toBuildArray);
setTimeout(() => {
  commentsArray = saveComments(commentsApi, breedCats);
}, 1000);
setTimeout(() => {
  buildStructure(toBuildArray, likesArray);
  buildModals(toBuildArray, commentsArray);
}, 2000);

// ----------------------------Event Listeners---------------------------
