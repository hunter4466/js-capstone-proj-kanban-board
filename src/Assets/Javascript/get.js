function getAllScores() {
  return new Promise((resolve) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CAKpdmbRq7bM8fhT7CRa/scores/')
      .then((response) => response.json())
      .then(resolve);
  });
}

export default async function getScores() {
  const setVal = await getAllScores();
  return setVal;
}
