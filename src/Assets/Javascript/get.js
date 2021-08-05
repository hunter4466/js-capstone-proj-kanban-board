
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
