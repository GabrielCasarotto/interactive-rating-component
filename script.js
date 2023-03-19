const box1 = document.querySelector('[data-box1]');
const box2 = document.querySelector('[data-box2]');
const error = document.querySelector('[data-error]');
const buttons = document.querySelectorAll('[data-buttons] button');
const submit = document.querySelector('[data-submit]');
const selectionMsg = document.querySelector('[data-msg]');
let select = '';

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    removeSelectedClasses();
    select = e.target.textContent;
    e.target.classList.add('select');
  });
});

submit.addEventListener('click', () => {
  if (select === '') {
    addButtonErrors();
    setTimeout(removeButtonErrors, 3000);
    return;
  }

  selectionMsg.textContent = `You selected ${select} out of 5`;
  box2.classList.remove('box2');
  box1.classList.add('box2');
});

function addButtonErrors() {
  error.classList.remove('box2');
  buttons.forEach((btn) => {
    btn.classList.add('error');
  });
}

function removeButtonErrors() {
  error.classList.add('box2');
  buttons.forEach((btn) => {
    btn.classList.remove('error');
  });
}

function removeSelectedClasses() {
  buttons.forEach((btn) => {
    btn.classList.remove('select');
  });
}
