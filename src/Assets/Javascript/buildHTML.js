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
  const mainContainer = document.getElementById('recent_scores_ul');
  const toBuildArray = [];
  mainContainer.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    const liContainer = document.createElement('li');
    const tempUserObj = document.createElement('p');
    const tempScoreObj = document.createElement('p');
    toBuildArray.push([mainContainer, liContainer, 'leader_item']);
    toBuildArray.push([liContainer, tempUserObj, 'leader_name', array[i].user]);
    toBuildArray.push([liContainer, tempScoreObj, 'leader_score', array[i].score]);
  }
  htmlBuilder(toBuildArray);
}