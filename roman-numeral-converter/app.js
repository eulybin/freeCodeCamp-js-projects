const input = document.getElementById('numberInput');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  console.log(input.value);
  if (input.value <= 0) {
    output.classList.add('error');
    output.textContent = 'Please enter a positive integer.';
  } else if (input.value >= 4000) {
    output.classList.add('error');
    output.textContent = 'Please enter a number less than or equal to 3999.';
  } else {
    output.textContent = 'Thank you!';
  }
});
