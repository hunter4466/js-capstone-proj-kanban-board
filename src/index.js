import './Assets/Styles/_styles.scss';
import './Assets/Styles/modules/_boxes.scss';
import './Assets/Styles/modules/_buttons.scss';
import './Assets/Styles/modules/_inputs.scss';
import logo from './Assets/Images/Logos/logo.png';
// import setScores from './Assets/Javascript/post';
// import getScores from './Assets/Javascript/get';
// import buildStructure from './Assets/Javascript/buildHTML';

const logoImg = document.getElementById('logo_img');
logoImg.src = logo;

const api1 = 'https://api.thecatapi.com/v1/images/search?breed_ids=abys';
const api2 = 'https://api.thecatapi.com/v1/images/search?breed_ids=aege';
const api3 = 'https://api.thecatapi.com/v1/images/search?breed_ids=abob';
// const api4 = 'https://api.thecatapi.com/v1/images/search?breed_ids=amau';
// const api5 = 'https://api.thecatapi.com/v1/images/search?breed_ids=amis';
// const api6 = 'https://api.thecatapi.com/v1/images/search?breed_ids=bamb';
// const api7 = 'https://api.thecatapi.com/v1/images/search?breed_ids=bslo';
// const api8 = 'https://api.thecatapi.com/v1/images/search?breed_ids=cspa';
// const api9 = 'https://api.thecatapi.com/v1/images/search?breed_ids=beng';
const fetchPics = () => {
  const img = document.querySelector('.catsImg1');
  fetch(api1)
    .then((response) => response.json())
    .then((json) => {
      const nameSelector = document.querySelector('#name1');
      nameSelector.innerText = json[0].breeds[0].name;
      // iTag.classList.add('bi', 'bi-heart');
      const imgTag = document.createElement('img');
      imgTag.setAttribute('src', `${json[0].url}`);
      imgTag.setAttribute('width', '200');
      imgTag.setAttribute('height', '200');
      img.append(imgTag);
    });
  const img2 = document.querySelector('.catsImg2');
  fetch(api2)
    .then((response) => response.json())
    .then((json) => {
      const pTag = document.createElement('p');
      pTag.innerText = json[0].breeds[0].name;
      const imgTag = document.createElement('img');
      imgTag.setAttribute('src', `${json[0].url}`);
      imgTag.setAttribute('width', '200');
      imgTag.setAttribute('height', '200');
      img2.append(imgTag);
      img2.append(pTag);
    });
  const img3 = document.querySelector('.catsImg3');
  fetch(api3)
    .then((response) => response.json())
    .then((json) => {
      const pTag = document.createElement('p');
      pTag.innerText = json[0].breeds[0].name;
      const imgTag = document.createElement('img');
      imgTag.setAttribute('src', `${json[0].url}`);
      imgTag.setAttribute('width', '200');
      imgTag.setAttribute('height', '200');
      img3.append(imgTag);
      img3.append(pTag);
    });
};

fetchPics();