export const postLike = async (iApi, id) => {
  await fetch(iApi, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text());
};

export const postComment = async (iApi, id, user, comment) => {
  await fetch(iApi, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text());
};