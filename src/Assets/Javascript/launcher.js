const breedCats2 = ['abys', 'aege', 'aege', 'amau', 'amis', 'bamb', 'bslo', 'cspa', 'beng'];
const likesApi2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GTdCo4dMv7OdJ4VT5RJ0/likes';
const commentsApi2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GTdCo4dMv7OdJ4VT5RJ0/comments?item_id=';

const postLikelauncher = async (iApi, id) => {
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
  
const postCommentlauncher = async (iApi, id, user, comment) => {
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

  breedCats2.forEach((e)=>{
    postLikelauncher(likesApi2,e)
  })
  breedCats2.forEach((e)=>{
    postCommentlauncher(commentsApi2,e,'Mario', 'This Cat is nice')
  })