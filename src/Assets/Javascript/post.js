function setNewScore(val1, val2) {
  return new Promise((resolve) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CAKpdmbRq7bM8fhT7CRa/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: val1,
        score: val2,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
    resolve('Saved Game');
  });
}

export default async function setScores(val1, val2) {
  const setVal = await setNewScore(val1, val2);
  return setVal;
}
