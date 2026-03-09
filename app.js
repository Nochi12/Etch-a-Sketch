const container = document.querySelector("#container")
const button = document.querySelector(".button")
const button2 = document.querySelector(".button2")
createGrid(16)
function createGrid(divs){
    
const numGrid = divs * divs;
const maxGrid = 960 / divs ;
for(let i = 0; i < numGrid ; i++)
{
    const grids = document.createElement("div");
    grids.classList.add("grid");
    grids.style.flex = `1 0  ${maxGrid + "px"}`;   
    grids.style.border = "solid 1px  black";
    grids.style.boxSizing = "border-Box";
    grids.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "black";
    })
    button2.addEventListener("click",() =>{

        grids.addEventListener("mouseover", e=> {
            e.target.style.backgroundColor = randomRGB();
        })
    })
    container.appendChild(grids)
}
}

button.addEventListener("click" ,() => {
container.innerHTML = "";
const userInput = parseInt(prompt("Enter A number between 1 - 100 "))

if(!Number.isInteger(userInput))
{
    alert("User Input is not a Number!!! ")
}
if(userInput < 0 || userInput > 100 )
{
    alert("Please only put Number between 1 - 100")
}else
{
return createGrid(userInput)
    
}

})

function randomRGB()
{
    const red = Math.floor(Math.random() * 256 ) + 1;
    const green = Math.floor(Math.random() * 256 )+ 1;
    const blue = Math.floor(Math.random() * 256 ) + 1;

    const rgbRandom = `rgb(`+ red + `,` + green + `,` + blue + `)`;
    return rgbRandom 
}   

