const answer = document.querySelector('#answer');
const rest = document.querySelector('#rest');
const pass = document.querySelector('#pass');

rest?.addEventListener('click', () => {
  answer.textContent = 'REST ACCEPTED. IT WAS ALREADY VALID.';
});

pass?.addEventListener('click', () => {
  answer.textContent = 'PASS ACCEPTED. NOTHING FOLLOWS YOU.';
});
