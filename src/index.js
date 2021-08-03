import './Assets/Styles/_styles.scss';
import './Assets/Styles/modules/_boxes.scss';
import './Assets/Styles/modules/_buttons.scss';
import './Assets/Styles/modules/_inputs.scss';
import logo from './Assets/Images/Logos/logo.png';

// import setScores from './Assets/Javascript/post';
// import getScores from './Assets/Javascript/get';
import buildStructure from './Assets/Javascript/buildHTML';

const logoImg = document.getElementById('logo_img');
logoImg.src = logo;
const breedCats = ['abys', 'aege', 'abob', 'amau', 'amis', 'bamb', 'bslo', 'cspa', 'beng'];
const api = 'https://api.thecatapi.com/v1/images/search?breed_ids=';

let toBuildArray = []
breedCats.forEach((e)=>{
  const resultJSON = fetchPics(e);
  resultJSON.then((data)=>{
    toBuildArray.push(data)
  })

})
console.log(toBuildArray.length)

async function fetchPics(e){
  return new Promise((resolve)=>{
    // const img = document.querySelector('.catsImg1');
      fetch(`${api}${e}`)
        .then((response) => response.json())
        .then(resolve);
    });
};

fetchPics();

buildStructure(toBuildArray);




// const nameSelector = document.querySelector('#name1');
// nameSelector.innerText = json[0].breeds[0].name;
// iTag.classList.add('bi', 'bi-heart');
// const imgTag = document.createElement('img');
// imgTag.setAttribute('src', `${json[0].url}`);
// imgTag.setAttribute('width', '200');
// imgTag.setAttribute('height', '200');
// img.append(imgTag);