//operator function(oprate two give numbers)

function operate(a,b,operator)
{
    if (operator === "+")
    {
        return parseInt(a)+parseInt(b)
    }
    else if (operator === "-")
    {
        return parseInt(a)-parseInt(b)
    }
    else if (operator === "/")
    {
        return parseInt(a)/parseInt(b)
    }
    else if (operator === "*")
    {
        return parseInt(a)*parseInt(b)
    }
    else if(operator === "/" && b === 0)
    {
        return wtfBOOOM
    }
}
const calculator = document.querySelector(".calculator")
const keys = document.querySelector(".calculator-keys")
const btn = document.querySelectorAll(".key-number");
let symbol = null
let number = " "
let firstValue = null
let secondValue = null

function operateDisplay()
    {   //conctanate into the display
        number += this.textContent;
        display.textContent=number;
    }
//when click in a button,it shows it value on display
btn.forEach((button)=>{
    button.addEventListener("click",operateDisplay)
})
operator.forEach((operation)=>{
    operation.addEventListener("click",operateDisplay)
    operation.addEventListener("click",handleOperation)
})
//equal number(show the result)
