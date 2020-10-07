let numSquares = 9;
let colors = generateRandomColors(numSquares);

function generateRandomColors(num)
{
    let arr = [];
    for(let i = 0; i< num; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor()
{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return "rgb(" + r +", " + g + ", " + b + ")"
}


let pickedColor = pickColor();
function pickColor()
{
   let random =  Math.floor(Math.random()* colors.length);
   return colors[random];
}

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

let resetBtn = document.querySelector("#reset");
let messageDisplay = document.querySelector("#display");
let modeBtn = document.querySelectorAll(".mode");

for (let i= 0;i < modeBtn.length;i++ )
{
    modeBtn[i].addEventListener("click",function()
    {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        modeBtn[2].classList.remove("selected");
        this.classList.add("selected");
        numSquares = 3 + (i*3);
        reset();
    }
    );
}

function reset()
{
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(let i = 0;i < squares.length;i++)
    {  
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
}

for(let i = 0;i < squares.length;i++){  
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function()
    {
        if(this.style.backgroundColor === pickedColor)
        {
            messageDisplay.textContent = "You Guessed Correctly";
            changeColorofAll(pickedColor);
            resetBtn.textContent = "Play Again?";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

resetBtn.addEventListener("click",function()
{
    reset();
});

function changeColorofAll(col)
{
    for(let i = 0;i < squares.length;i++)
    {
        squares[i].style.backgroundColor = col;
    }
    h1.style.backgroundColor = col;
}
