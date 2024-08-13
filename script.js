document.addEventListener("click",(e)=>{
    
    let xPos = e.x;
    let yPos = e.y;

    let div = document.createElement('div');

    div.style.position = "absolute";
    div.style.left = `${xPos}px`;
    div.style.top = `${yPos}px`;
    div.classList.add("circle");

    document.body.appendChild(div);
    
    
    console.log(document.body);
    
    
    
})