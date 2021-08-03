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

export default function buildStructure(array) {
  let finalStructure = [];

const nameSelector = document.getElementById('class_container');

for(let i = 0; i<9; i += 1){
  let mainBoxDiv = document.createElement('div')
  let catsImg = document.createElement('div')
  let likeArea = document.createElement('div')
  let catName = document.createElement('h5')
  let likeHeart = document.createElement('i')
  let commentBtn = document.createElement('button')
  let popUpCointainer = document.createElement('div')
  let modalDialog = document.createElement('div')
  let modalContent = document.createElement('div')
  let modalHeader = document.createElement('div')
  let modalTitle = document.createElement('h5')
  let btnClose = document.createElement('button')
  let modalBody = document.createElement('div')
  let modalFooter = document.createElement('div')
  let secondaryBtn = document.createElement('button')
  let primaryBtn = document.createElement('button')
  commentBtn.setAttribute('data-bs-toggle','modal')
  commentBtn.setAttribute('data-bs-target','#exampleModa')
  popUpCointainer.setAttribute('tabindex','-1')
  popUpCointainer.setAttribute('aria-labelledby','exampleModalLabel')
  popUpCointainer.setAttribute('aria-hidden','truel')
  btnClose.setAttribute('type','button')
  btnClose.setAttribute('data-bs-dismiss','modal')
  btnClose.setAttribute('aria-label','Close')
  secondaryBtn.setAttribute('data-bs-dismiss','modal')
  finalStructure.push([nameSelector,mainBoxDiv,'col'])
  finalStructure.push([mainBoxDiv,catsImg,'catsImg1'])
  finalStructure.push([mainBoxDiv,likeArea,'d-flex justify-content-center'])
  finalStructure.push([likeArea,catName,null,null,'name1'])
  finalStructure.push([likeArea,likeHeart,'bi bi-heart ms-4'])
  finalStructure.push([mainBoxDiv,commentBtn,'btn btn-primary'])
  finalStructure.push([mainBoxDiv,popUpCointainer,'modal fade',null,'exampleModal'])
  finalStructure.push([popUpCointainer,modalDialog,'modal-dialog'])
  finalStructure.push([modalDialog,modalContent,'modal-content'])
  finalStructure.push([modalContent,modalHeader,'modal-header'])
  finalStructure.push([modalHeader,modalTitle,'modal-title',null,'cat1title'])
  finalStructure.push([modalHeader,btnClose,'btn-close'])
  finalStructure.push([modalContent,modalBody,'modal-body'])
  finalStructure.push([modalContent,modalFooter,'modal-footer'])
  finalStructure.push([modalFooter,secondaryBtn,'btn btn-secondary','Close'])
  finalStructure.push([modalFooter,primaryBtn,'btn btn-primary','Save changes'])
}
  htmlBuilder(finalStructure);
}