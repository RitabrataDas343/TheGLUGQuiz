const correctAnswers = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

  scrollTo(0, 0);
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
    if(score === 100){
      document.getElementById('flag').innerHTML = 'You have got your flag, but where is it?';
      document.getElementById('normal').innerHTML = 'GLUG{1t_w4s_4n_3aSy_qU1z}';
    } else {
      document.getElementById('flag').innerHTML = '';
      document.getElementById('normal').innerHTML = '';
    }
  }, 10);
});


