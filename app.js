const container = document.querySelector("#container")

function createGrid(divs){
const numGrid = divs * divs;
for(let i = 0; i < numGrid ; i++)
{
    const grids = document.createElement("div");
    grids.classList.add("grid");

    grids.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "black";
    })
    
    container.appendChild(grids)
}
}


createGrid(16)
