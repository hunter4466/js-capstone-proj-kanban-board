function getAll(iApi) {
  return new Promise((resolve) => {
    fetch(iApi)
      .then((response) => response.json())
      .then(resolve);
  });
}

export async function get(param) {
  const setVal = await getAll(param);
  return setVal;
}

function getAllComments(api, e) {
  return new Promise((resolve) => {
    fetch(api + e)
      .then((response) => response.json())
      .then(resolve);
  });
}

async function getComments(param, e) {
  const setVal = await getAllComments(param, e);
  console.log(setVal)
  return setVal;
 
}

export function saveComments(api, array) {
  const result = [];
  let comment;
  array.forEach((element) => {
    comment = getComments(api, element);
   comment.then(val =>result.push({ id: element, value: val }))
  });
  return result
}
