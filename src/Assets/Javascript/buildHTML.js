import { postLike, postComment } from './post';
import { storeInfo, retrieveInfo } from './localStorage';

const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/comments';

function htmlBuilder(obj) {
  for (let i = 0; i < obj.length; i += 1) {
    if (obj[i].length === 2) {
      obj[i][0].appendChild(obj[i][1]);
    } else if (obj[i].length === 3) {
      const [a, b, c] = obj[i];
      a.appendChild(b);
      b.className = c;
    } else if (obj[i].length === 4) {
      const [a, b, c, d] = obj[i];
      if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
      } else {
        a.appendChild(b);
        b.className = c;
        b.innerHTML = d;
      }
    } else if (obj[i].length === 5) {
      const [a, b, c, d, e] = obj[i];
      if (c == null && d == null) {
        a.appendChild(b);
        b.id = e;
      } else if (c == null) {
        a.appendChild(b);
        b.innerHTML = d;
        b.id = e;
      } else if (d == null) {
        obj[i][0].appendChild(b);
        b.className = c;
        b.id = e;
      } else {
        obj[i][0].appendChild(b);
        b.innerHTML = d;
        b.className = c;
        b.id = e;
      }
    }
  }
}

export function buildStructure(array, likesArray) {
  const finalStructure = [];
  const nameSelector = document.getElementById('class_container');
  const getLocalLikesPrev = retrieveInfo('likesStorage');

  for (let i = 0; i < array.length; i += 1) {
    const mainBoxDiv = document.createElement('div'); // don't move this

    const catsDiv = document.createElement('div');
    const catsImg = document.createElement('img');
    const likeArea = document.createElement('div');
    const catName = document.createElement('h5');
    const likeHeart = document.createElement('i');
    const likesCount = document.createElement('p');
    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('data-bs-toggle', 'modal');
    commentBtn.setAttribute('data-bs-target', `#exampleModal${i + 1}`);
    catsImg.setAttribute('src', `${array[i].url}`);
    let likesCounter = 0;
    for (let x = 0; x < likesArray.length; x += 1) {
      if (array[i].breeds[0].id === likesArray[x].item_id) {
        likesCounter = likesArray[x].likes;
      }
    }
    let likeHeartState = false;
    likeHeart.addEventListener('click', (event) => {
      event.preventDefault();
      const getLocalLikes = retrieveInfo('likesStorage');
      if (!getLocalLikes[array[i].breeds[0].id]) {
        const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/likes';
        postLike(likesApi, array[i].breeds[0].id);
        likeHeart.className = 'bi bi-heart-fill ms-4';
        likeHeartState = true;
        let likesStorage = {};
        if (localStorage.getItem('likesStorage')) {
          likesStorage = retrieveInfo('likesStorage');
        } else {
          const initValue = { init: 'initiated' };
          storeInfo('likesStorage', initValue);
          likesStorage = retrieveInfo('likesStorage');
        }

        likesStorage[array[i].breeds[0].id] = true;
        storeInfo('likesStorage', likesStorage);
        likesCount.innerHTML = `${parseInt(likesCount.id) + 1} likes`;
      }
    });

    finalStructure.push([nameSelector, mainBoxDiv, 'itemCat', null, `mainBoxDiv${i}`]); // don't move this

    finalStructure.push([mainBoxDiv, catsDiv, 'catsDiv']);
    finalStructure.push([catsDiv, catsImg]);
    finalStructure.push([mainBoxDiv, likeArea, 'd-flex justify-content-center']);
    finalStructure.push([likeArea, catName, null, array[i].breeds[0].name]);

    if (getLocalLikesPrev[array[i].breeds[0].id]) {
      finalStructure.push([likeArea, likeHeart, 'bi bi-heart-fill ms-4']);
      likeHeartState = true;
    } else {
      finalStructure.push([likeArea, likeHeart, 'bi bi-heart ms-4']);
    }

    finalStructure.push([mainBoxDiv, likesCount, 'likesCount', `${likesCounter} likes`, `${likesCounter}`]);
    finalStructure.push([mainBoxDiv, commentBtn, 'btn', 'Comments']); // don't move this
  }
  htmlBuilder(finalStructure);
}

export function buildModals(array, commentsArray) {
  const finalStructure = [];
  for (let i = 0; i < array.length; i += 1) {
    const mainBoxDiv = document.getElementById(`mainBoxDiv${i}`);
    const popUpCointainer = document.createElement('div');
    const modalDialog = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalHeader = document.createElement('div');
    const modalPicture = document.createElement('img');
    const modalTitle = document.createElement('h5');
    const btnClose = document.createElement('button');
    const modalBody = document.createElement('div');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const data1 = document.createElement('span');
    const data2 = document.createElement('span');
    const div5 = document.createElement('div');
    const div6 = document.createElement('div');
    const div7 = document.createElement('div');
    const data3 = document.createElement('span');
    const data4 = document.createElement('a');
    const div8 = document.createElement('div');
    const commentTitle = document.createElement('h5');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Your name');
    const commentInput = document.createElement('textarea');
    commentInput.setAttribute('placeholder', 'Your insights');
    data4.setAttribute('href', array[i].breeds[0].wikipedia_url);
    const commentBtn = document.createElement('button');
    commentBtn.addEventListener(('click'), () => {
      postComment(involvementApi, array[i].breeds[0].id, nameInput.value, commentInput.value);
    });
    const commentTitle2 = document.createElement('h5');
    const div9 = document.createElement('div');
    popUpCointainer.setAttribute('tabindex', '-1');
    popUpCointainer.setAttribute('aria-labelledby', 'exampleModalLabel');
    popUpCointainer.setAttribute('aria-hidden', 'truel');
    btnClose.setAttribute('type', 'button');
    btnClose.setAttribute('data-bs-dismiss', 'modal');
    btnClose.setAttribute('aria-label', 'Close');
    modalPicture.setAttribute('src', array[i].url);

    finalStructure.push([mainBoxDiv, popUpCointainer, 'modal fade', null, `exampleModal${i + 1}`]);
    finalStructure.push([popUpCointainer, modalDialog, 'modal-dialog']);
    finalStructure.push([modalDialog, modalContent, 'modal-content']);
    finalStructure.push([modalContent, modalHeader, 'modal-header']);
    finalStructure.push([modalHeader, btnClose, 'btn-close']);
    finalStructure.push([modalContent, modalBody, 'modal-body container text-center']);
    finalStructure.push([modalBody, modalPicture, 'modal-picture']);
    finalStructure.push([modalBody, modalTitle, 'modal-title', array[i].breeds[0].name]);
    finalStructure.push([modalBody, div, 'container']);
    finalStructure.push([div, div2, 'row']);
    finalStructure.push([div2, div3, 'col']);
    finalStructure.push([div2, div4, 'col']);
    finalStructure.push([div3, data1, null, `Country: ${array[i].breeds[0].origin}`]);
    finalStructure.push([div4, data2, null, `Affection Level: ${array[i].breeds[0].affection_level}`]);
    finalStructure.push([div, div5, 'row']);
    finalStructure.push([div5, div6, 'col']);
    finalStructure.push([div5, div7, 'col']);
    finalStructure.push([div6, data3, null, `Weight: ${array[i].breeds[0].weight.metric} Kg`]);
    finalStructure.push([div7, data4, null, 'Wikipedia']);
    let c = 0;
    for (let x = 0; x < commentsArray.length; x += 1) {
      if (array[i].breeds[0].id === commentsArray[x].id) {
        for (let y = 0; y < commentsArray[x].value.length; y += 1) {
          c += 1;
          const commentContainer = document.createElement('div');
          const commentValue = document.createElement('p');
          finalStructure.push([div9, commentContainer]);
          finalStructure.push([commentContainer, commentValue, null,
            `${commentsArray[x].value[y].creation_date
            } ${commentsArray[x].value[y].username
            }: ${commentsArray[x].value[y].comment}`]);
        }
      }
    }
    finalStructure.push([modalBody, commentTitle2, null, `Comment (${c})`]);
    finalStructure.push([modalBody, div9]);
    finalStructure.push([modalBody, commentTitle, null, 'Add a comment']);
    finalStructure.push([modalBody, div8, 'form-group']);
    finalStructure.push([div8, nameInput, 'form-control']);
    finalStructure.push([div8, commentInput, 'form-control']);
    finalStructure.push([div8, commentBtn, 'btn btn-primary', 'Comment']);
  }
  htmlBuilder(finalStructure);
}
