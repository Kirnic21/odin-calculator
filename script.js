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
    else if (operator === "/" && b === "0")
    {
        return "WTFBOOM"
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
//DOM varibles
const btn = document.querySelectorAll(".keyNumber")
const display =document.querySelector(".calculator-display")
const clear = document.querySelector(".clear")
const operator = document.querySelectorAll(".operator")
const equal = document.querySelector(".equal")
let symbol = " "
let result = " "
let valueInDisplay = " "
let value1 = " "
function operateDisplay()
    {   //conctanate into the display
        valueInDisplay += this.textContent;
        display.textContent=valueInDisplay;
    }
function operatorsChoice()
{
    if (this.textContent === "+")
    {
            value1 = valueInDisplay
            symbol = "+"
            valueInDisplay = ""

    }
    else if(this.textContent ==="-")
    {
        value1 = valueInDisplay
        symbol = "-"
        valueInDisplay = ""
    }
    else if(this.textContent ==="/")
    {
        value1 = valueInDisplay
        valueInDisplay = ""
        symbol = "/"
    }
    else if(this.textContent ==="*")
    {
        value1 = valueInDisplay
        valueInDisplay = ""
        symbol = "*"
    }
}
//when click in a button,it shows it value on display
btn.forEach((button)=>
button.addEventListener("click",operateDisplay))
//choose operators

operator.forEach((operation)=>
operation.addEventListener("click",operatorsChoice))
equal.addEventListener("click",()=>{
    result = operate(value1,valueInDisplay,symbol)
    symbol = ""
    valueInDisplay = result;
    display.textContent = result
})
clear.addEventListener("click",()=>{
    value1=""
    valueInDisplay=""
    symbol=""
})