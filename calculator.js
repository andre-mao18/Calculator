function add(n1, n2)
{
    return +n1 + +n2;
}

function subtract(n1, n2)
{
    return +n1 - +n2;
}

function multiply(n1, n2)
{
    return +n1 * +n2;
}

function divide(n1, n2)
{
    if (n2 == 0)
    {
        return undefined;
    }
    return +n1 / +n2;
}

function operate(n1, n2, operator)
{
    if (operator === "+")
    {
        return add(n1, n2);
    }
    else if (operator === "-")
    {
        return subtract(n1, n2);
    }
    else if (operator === "*")
    {
        return multiply(n1, n2);
    }
    else if (operator === "/")
    {
        return divide(n1, n2);
    }
}

container = document.querySelector(".buttons");
for (let i = 0; i < 10; i++)
{
    curBut = document.createElement("button");
    curBut.textContent = "" + i;
    curBut.id = "" + i;
    container.appendChild(curBut);
}

curBut = document.createElement("button");
curBut.textContent = "+";
curBut.id = "+";
container.appendChild(curBut);

curBut = document.createElement("button");
curBut.textContent = "-";
curBut.id = "-";
container.appendChild(curBut);

curBut = document.createElement("button");
curBut.textContent = "*";
curBut.id = "*";
container.appendChild(curBut);

curBut = document.createElement("button");
curBut.textContent = "/";
curBut.id = "/";
container.appendChild(curBut);

curBut = document.createElement("button");
curBut.textContent = "=";
curBut.id = "=";

container.appendChild(curBut);

curBut = document.createElement("button");
curBut.textContent = "clear";
curBut.id = "clear";
container.appendChild(curBut);

buttons = document.querySelectorAll("button");
display = document.querySelector(".display");
disp = document.createElement("p");
disp.textContent = "";
display.appendChild(disp);

let num1, num2;
let operator = "";
let afterOperator = false;

buttons.forEach((button) => {
    if (button.id === "=")
    {
        button.addEventListener('click', () => {
            if (disp.textContent.length > 0 && operator !== "")
            {
                console.log(num1 + " " + operator);
                num2 = disp.textContent;
                num1 = operate(num1, num2, operator);
                console.log(num1);
                disp.textContent = "" + num1;
            }
        });
    }
    else if (button.id === "clear")
    {
        button.addEventListener('click', () => {
            disp.textContent = "";
            num1 = 0;
            num2 = 0;
            operator = "";
        });
    }
    else if (button.id === "+" || button.id === "-" || button.id === "*" || button.id === "/")
    {
        button.addEventListener('click', () => {
            if (operator !== "")
            {
                console.log("HERE");
                num2 = disp.textContent;
                num1 = operate(num1, num2, operator);
                console.log(num1);
                disp.textContent = "" + num1;
                operator = button.id;
            }
            else if (disp.textContent.length > 0)
            {
                num1 = +disp.textContent;
                operator = button.id;
                disp.textContent = "";
            }
            afterOperator = true;
        });
    }
    else
    {
        button.addEventListener('click', () => {
            if (afterOperator)
            {
                disp.textContent = "";
                afterOperator = false;
            }
            disp.textContent += button.textContent;
        });
    }
});