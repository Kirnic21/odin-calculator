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
}
const btn = document.querySelectorAll(".key-number");
const display =document.querySelector("#display");
const clear = document.querySelector(".key-clear")
let symbol = " "
let result = " "
let number = " "
function operateDisplay()
    {   //conctanate into the display
        number += this.textContent;
        display.textContent=value;

    }
    console.log(value,value1,value2)
function clearButton()
    {
        value = " ";
        value1 = " "
        display.textContent = value;
    }
//when click in a button,it shows it value on display
btn.forEach((button)=>{
    button.addEventListener("click",operateDisplay)
})
btn.forEach((button)=>{
    button.addEventListener("click",handleOperation)
})
clear.addEventListener("click",clearButton)
function handleOperation()
{
if (this.textContent === "+")
{
symbol = "+"
}
else if(this.textContent === "-")
{
    symbol = "+"
}
else if(this.textContent === "/")
{
    symbol = "+"
}
else if(this.textContent === "*")
{
    symbol = "+"
}
else if(this.textContent === "=")
{
    result = operate(value1,value,symbol)
    display.textContent = result
    value = " "
    value1 = " "
}
console.log(value,value1)
}
function stringTogether()