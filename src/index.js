// ----------------------------Imports---------------------------

import './Assets/Styles/_styles.scss';
import './Assets/Styles/modules/_boxes.scss';
import './Assets/Styles/modules/_buttons.scss';
import './Assets/Styles/modules/_inputs.scss';
import logo from './Assets/Images/Logos/logo.png';

import fetchPics from './Assets/Javascript/fetch';
import { get, getComments } from './Assets/Javascript/get';
import { buildStructure, buildModals } from './Assets/Javascript/buildHTML';

// ----------------------------Variables---------------------------

const logoImg = document.getElementById('logo_img');
const breedCats = ['abys', 'aege', 'abob', 'amau', 'amis', 'bamb', 'bslo', 'cspa', 'beng'];
const api = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/likes';
const commentsApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/comments?item_id=';
const toBuildArray = [];
const commentsArray = [];
// ----------------------------Assignations---------------------------

logoImg.src = logo;

// ----------------------------Callbacks---------------------------
let likesArray;
setTimeout(() => { get(likesApi).then((val) => { likesArray = val; }); }, 2000);
fetchPics(api, breedCats, toBuildArray);
setTimeout(() => {getComments(commentsApi, breedCats, commentsArray);}, 2000);
setTimeout(() => { buildStructure(toBuildArray, likesArray); buildModals(toBuildArray, commentsArray); }, 4000);

// ----------------------------Event Listeners---------------------------
