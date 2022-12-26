//operator function(oprate two give numbers)
function operate(a,b,operator)
{
    if (operator === "+")
    {
        return parseInt(a)+parseInt(b)
    }
    else if (operator === "-")
    {
        return a-b
    }
    else if (operator === "/")
    {
        return a/b
    }
    else if (operator === "*")
    {
        return a*b
    }
}
const btn = document.querySelectorAll(".key-number")
const display =document.querySelector("#display")
//when click in a button,it shows it value on display
btn.forEach((button)=>{
    button.addEventListener("click",function pizza()
    {
        let result = operate(this.textContent , this.textContent, "+")
        display.textContent = result
    })
})
