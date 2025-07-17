const inputElem = document.getElementById('text-input');
const buttonElem = document.getElementById('check-btn');
const resultElem = document.getElementById('result');

const isPalindrome = (str) => {
  const regex = /[^a-zA-Z0-9]/gi;
  str = str.replace(regex, '');
  const reversed = str.toLowerCase().split('').reverse().join('');
  return str.toLowerCase() === reversed;
};

buttonElem.addEventListener('click', () => {
  if (inputElem.value.length <= 0) {
    alert('Please input a value');
  } else {
    if (isPalindrome(inputElem.value)) {
      resultElem.textContent = `${inputElem.value} is a palindrome`;
    } else {
      resultElem.textContent = `${inputElem.value} is not a palindrome`;
    }
  }
});
