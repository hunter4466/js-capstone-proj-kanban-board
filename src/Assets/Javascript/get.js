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

export const getComments = (api, array1, array2) => {
  array1.forEach(async (e) => {
    await fetch(api + e)
      .then((response) => response.json())
      .then((json) => {
        array2.push({ id: e, value: json });
      });
  });
};
