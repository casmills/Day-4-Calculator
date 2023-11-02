function calculate(expression) {

const token = expressions.split(` `)

let num1 = Number(token[0])
let operator = token[1]
let num2 = Number(token[2])

if (Number.isNaN(num1) || Number.isNan(num2)) {
  alert(`Not a number dummy! Try again!`)
  return
}

function add(num1, num2) {
  return (num1 + num2)
}
function subtract(num1, num2) {
  return (num1 - num2)
}
function multiply(num1, num2) {
  return (num1 * num2)
}
function divide(num1, num2) {
  return (num1 / num2)
}
function power(num1, num2) {
  return Math.pow(num1, num2)
}
function mod(num1, num2) {
  return (num1 % num2)
}
function sqrt(num1) {
  return Math.sqrt(num1)
}
if (operator === '+') {
  return add(num1, num2);
}
if (operator === '-') {
  return subtract(num1, num2);
}
if (operator === '*') {
  return multiply(num1, num2);
}
if (operator === '/') {
  return divide(num1, num2);
}
if (operator === 'pow') {
  return power(num1, num2);
}
if (operator === '%') {
  return mod(num1, num2);
}
if (operator === 'sqrt') {
  return sqrt(num1);
}
}




/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
