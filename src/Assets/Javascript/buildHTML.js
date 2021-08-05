import {postLike} from './post';
import {storeInfo,retrieveInfo} from './localStorage';

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
  console.log(likesArray)
  let getLocalLikesPrev = retrieveInfo('likesStorage')

  for (let i = 0; i < array.length; i += 1) {
    // console.log(array[i].breeds[0].id);
    const mainBoxDiv = document.createElement('div');  //don't move this
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
    for(let x = 0;x<likesArray.length;x+=1) {
      if(array[i].id === likesArray[x].item_id ){
        likesCounter = likesArray[x].likes
      }
    };

    let likeHeartState = false
    likeHeart.addEventListener('click',(event)=>{
      event.preventDefault();
      let getLocalLikes = retrieveInfo('likesStorage')
      if(!getLocalLikes[array[i].id]){
        const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LnQtP7rZrNpR2zDEqCBJ/likes';
        postLike(likesApi,array[i].id);
        likeHeart.className = 'bi bi-heart-fill ms-4'
        likeHeartState = true;
        let likesStorage = {}
        if(localStorage.getItem('likesStorage')){
          likesStorage = retrieveInfo('likesStorage')
        }else{
          let initValue = {'init':'initiated'}
          storeInfo('likesStorage',initValue)
          likesStorage = retrieveInfo('likesStorage')
        }
        
        likesStorage[array[i].id] = true;
        storeInfo('likesStorage',likesStorage)
        likesCount.innerHTML = parseInt(likesCount.id)+1+" likes"
      }
    })

    finalStructure.push([nameSelector, mainBoxDiv, 'itemCat',null,`mainBoxDiv${i}`]); //don't move this
    finalStructure.push([mainBoxDiv, catsDiv, 'catsDiv']);
    finalStructure.push([catsDiv, catsImg]);
    finalStructure.push([mainBoxDiv, likeArea, 'd-flex justify-content-center']);
    finalStructure.push([likeArea, catName, null, array[i].breeds[0].name]);
    if(getLocalLikesPrev[array[i].id]){
      finalStructure.push([likeArea, likeHeart, 'bi bi-heart-fill ms-4']);
      likeHeartState = true
    }else{
      finalStructure.push([likeArea, likeHeart, 'bi bi-heart ms-4']);
    }

    finalStructure.push([mainBoxDiv, likesCount, 'likesCount',`${likesCounter} likes`,`${likesCounter}`]);
    finalStructure.push([mainBoxDiv, commentBtn, 'btn btn-primary', 'Comments']); //don't move this

  }
  htmlBuilder(finalStructure);
}

export function buildModals(array) {
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
    const primaryBtn = document.createElement('button');

    popUpCointainer.setAttribute('tabindex', '-1');
    popUpCointainer.setAttribute('aria-labelledby', 'exampleModalLabel');
    popUpCointainer.setAttribute('aria-hidden', 'truel');
    btnClose.setAttribute('type', 'button');
    btnClose.setAttribute('data-bs-dismiss', 'modal');
    btnClose.setAttribute('aria-label', 'Close');
    modalPicture.setAttribute('src', `${array[i].url}`);
//tryying
    finalStructure.push([mainBoxDiv, popUpCointainer, 'modal fade', null, `exampleModal${i + 1}`]);
    finalStructure.push([popUpCointainer, modalDialog, 'modal-dialog']);
    finalStructure.push([modalDialog, modalContent, 'modal-content']);
    finalStructure.push([modalContent, modalHeader, 'modal-header']);
    finalStructure.push([modalHeader, btnClose, 'btn-close']);
    finalStructure.push([modalContent, modalBody, 'modal-body']);
    finalStructure.push([modalBody, modalPicture, 'modal-picture']);
    finalStructure.push([modalBody, modalTitle, 'modal-title', array[i].breeds[0].name, 'cat1title']);
    finalStructure.push([modalBody, primaryBtn, 'btn btn-primary', 'Comment']);
  }
  htmlBuilder(finalStructure);
}