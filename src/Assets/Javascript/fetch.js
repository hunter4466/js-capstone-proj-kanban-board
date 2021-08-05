export default function fetchPics(api, array1, array2) {
  array1.forEach(async (e) => {
    await fetch(api + e)
      .then((response) => response.json())
      .then((json) => {
        array2.push(json[0]);
      });
  });
}
