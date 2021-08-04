export default () => {
  const btnSelector = document.querySelectorAll('button[data-bs-toggle]');
  btnSelector.forEach((e) => {
    e.addEventListener(('click'), () => {
      console.log('hello');
    });
  });
};

// e.getAttribute('data-bs-target')