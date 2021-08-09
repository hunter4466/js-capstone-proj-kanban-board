const getAll = (iApi) => new Promise((resolve) => {
  fetch(iApi)
    .then((response) => response.json())
    .then(resolve);
});

export const get = async (param) => {
  const setVal = await getAll(param);
  return setVal;
};

const getAllComments = (api, e) => new Promise((resolve) => {
  fetch(api + e)
    .then((response) => response.json())
    .then(resolve);
});

const getComments = async (param, e) => {
  const setVal = await getAllComments(param, e);
  return setVal;
};

export const saveComments = (api, array) => {
  const result = [];
  let comment;
  array.forEach((element) => {
    comment = getComments(api, element);
    comment.then((val) => result.push({ id: element, value: val }));
  });
  return result;
};
