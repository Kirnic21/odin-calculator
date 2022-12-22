function sum(a,b)
{
    let sum = a + b
    return sum
}
function subtract(a,b)
{
    let subtract = a - b
    return subtract
}
function multiply(a,b)
{
    let multiply= a*b
    return multiply
}
function divide(a,b)
{
    let divide = a/b
    return divide
}
function operate(a,b,operator)
{
    if(operator === "/")
    {
    divide(a,b)
    }
    else if(operator === "*")
    {
    multiply(a,b)
    }
    else if(operator === "-")
    {
    subtract(a,b)
    }
    else if(operator === "+")
    {
    sum(a,b)
    }
}
let btns = document.querySelectorAll('.number');

for (i of btns) {
  i.addEventListener('click', function() {
   document.querySelector("#hello").innerHTML = this.innerHTML;
  });
}
