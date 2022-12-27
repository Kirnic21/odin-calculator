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
const btn = document.querySelectorAll(".key-number");
const operator= document.querySelectorAll(".key-operator")
const display =document.querySelector("#display");
const clear = document.querySelector(".key-clear")
const equal = document.querySelector(".key-equal")
let symbol = " "
let number = " "
let previousNumber = null

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
equal.addEventListener("click",function equal()
{
    if (previousNumber!==null)
    {
        let result = operate(previousNumber,number,symbol)
        display.textContent= result

    }
});
//clear function
function clearButton()
{
    clear.addEventListener()
}

function handleOperation()
{
if (this.textContent === "+")
{
    symbol = "+"
    previousNumber = number
    number = " "
}
else if(this.textContent === "-")
{
    symbol = "-"
    previousNumber = number
    number = " "
}
else if(this.textContent === "/")
{
    symbol = "/"
    previousNumber = number
    number = " "
}
else if(this.textContent === "*")
{
    symbol = "*"
    previousNumber = number
    number = " "
}
}
