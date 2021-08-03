import './Assets/Styles/_styles.scss';
import './Assets/Styles/modules/_boxes.scss';
import './Assets/Styles/modules/_buttons.scss';
import './Assets/Styles/modules/_inputs.scss';
import setScores from './Assets/Javascript/post';
import getScores from './Assets/Javascript/get';
import buildStructure from './Assets/Javascript/buildHTML';

const submitScoreBtn = document.getElementById('submit_score_btn');
const nameInput = document.getElementById('name_input');
const scoreInput = document.getElementById('score_input');
const refreshBtn = document.getElementById('refresh_btn');
const messageTag = document.getElementById('messageTag');

function loadScores() {
  const resultJSON = getScores();
  resultJSON.then((data) => {
    buildStructure(data.result);
  });
}

submitScoreBtn.addEventListener('click', (event) => {
  event.preventDefault();
  setScores(nameInput.value, scoreInput.value);
  messageTag.innerHTML = 'Score Added ✓';
  setTimeout(() => { messageTag.innerHTML = ''; }, 1000);
});

refreshBtn.addEventListener('click', (event) => {
  event.preventDefault();
  loadScores();
});

loadScores();