const input = document.getElementById('numberInput');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numeralsArr = [
  { value: 1000, numeral: 'M' },
  { value: 900, numeral: 'CM' },
  { value: 500, numeral: 'D' },
  { value: 400, numeral: 'CD' },
  { value: 100, numeral: 'C' },
  { value: 90, numeral: 'XC' },
  { value: 50, numeral: 'L' },
  { value: 40, numeral: 'XL' },
  { value: 10, numeral: 'X' },
  { value: 9, numeral: 'IX' },
  { value: 5, numeral: 'V' },
  { value: 4, numeral: 'IV' },
  { value: 1, numeral: 'I' },
];

const convertToRoman = (int) => {
  return 'TEST';
};

btn.addEventListener('click', () => {
  console.log(input.value);
  if (input.value <= 0) {
    output.classList.add('error');
    output.textContent = 'Please enter a positive integer.';
  } else if (input.value >= 4000) {
    output.classList.add('error');
    output.textContent = 'Please enter a number less than or equal to 3999.';
  } else {
    output.textContent = convertToRoman(input.value);
  }
});
