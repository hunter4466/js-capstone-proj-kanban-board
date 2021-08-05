export async function postLike(iApi,id){
  await fetch(iApi, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((json) => {
      console.log(json);
    });
};