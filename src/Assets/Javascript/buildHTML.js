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

export function buildStructure(array) {
  const finalStructure = [];
  const nameSelector = document.getElementById('class_container');
  console.log(array)
  for (let i = 0; i < array.length; i += 1) {
    // console.log(array[i].breeds[0].id);
    const mainBoxDiv = document.createElement('div');  //don't move this

    const catsDiv = document.createElement('div');
    const catsImg = document.createElement('img');
    const likeArea = document.createElement('div');
    const catName = document.createElement('h5');
    const likeHeart = document.createElement('i');
    const commentBtn = document.createElement('button');


    commentBtn.setAttribute('data-bs-toggle', 'modal');
    commentBtn.setAttribute('data-bs-target', `#exampleModal${i + 1}`);
    catsImg.setAttribute('src', `${array[i].url}`);



    finalStructure.push([nameSelector, mainBoxDiv, 'col',null,`mainBoxDiv${i}`]); //don't move this
    finalStructure.push([mainBoxDiv, catsDiv, 'catsDiv']);
    finalStructure.push([catsDiv, catsImg]);
    finalStructure.push([mainBoxDiv, likeArea, 'd-flex justify-content-center']);
    finalStructure.push([likeArea, catName, null, array[i].breeds[0].name]);
    finalStructure.push([likeArea, likeHeart, 'bi bi-heart ms-4']);
    finalStructure.push([mainBoxDiv, commentBtn, 'btn btn-primary', 'Comments']);

  }
  htmlBuilder(finalStructure);
}

export function buildModals(array) {
  const finalStructure = [];
  console.log(array)
  for (let i = 0; i < array.length; i += 1) {
    // console.log(array[i].breeds[0].id);
    const mainBoxDiv = document.getElementById(`mainBoxDiv${i}`);
    const popUpCointainer = document.createElement('div');
    const modalDialog = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalHeader = document.createElement('div');
    const modalPicture = document.createElement('img')
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