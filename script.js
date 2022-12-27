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
