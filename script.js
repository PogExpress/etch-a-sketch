generateCanvas(length);
deleteCanvas(length);

const container = document.getElementById("canvas");

const sizeButton = document.getElementById("size");
const sizeChangeButton = document.querySelector("#canvasSize");
const colorChange = document.querySelector("#randColors");
const darkenButton = document.querySelector("#darkButton");

const sizeScale = [
    1, 2, 4, 8
];

let size = 16;

sizeButton.textContent = sizeScale[0] + "px";
let currentSize = sizeScale[0];
let cycle = 0;

generateCanvas(size);

container.ondragstart = function(){
    return false;
}

//If mouse moves over another pixel while pressed then execute

let mouseDown = false;
let isColorChangeOn = false;
let isDarkenOn = false;

colorChange.addEventListener("click",function(){
    if(isColorChangeOn == false)
    {
        isColorChangeOn = true;
    }
    else
    {
        isColorChangeOn = false;
    }
})

darkenButton.addEventListener("click",function(){
    if(isDarkenOn == false)
        isDarkenOn = true;
    else
        isDarkenOn = false;
})



container.addEventListener("mousedown",function(){
    mouseDown = true;
});


container.addEventListener("mouseup",function(){
    mouseDown = false;
});

container.addEventListener("mouseover",
    (event) => {
        if(mouseDown)
        {
            if(isColorChangeOn == false)
            {
                if(event.target.style.backgroundColor == "black")
                {
                event.target.style.backgroundColor = "white";
                }
                else
                {
                event.target.style.backgroundColor = "black";
                }
            }
            else
            {

            // colorChange.style.backgroundColor = "rgb("+rand1Value+","+rand2Value+","+rand3Value+")";
            // colorChange.style.color = "rgb("+rand2Value+","+rand3Value+","+rand1Value+")";
            // colorChange.style.borderColor = "rgb("+rand3Value+","+rand1Value+","+rand2Value+")";

                
            let rand1Value = Math.floor(Math.random()*255)+1;
            let rand2Value = Math.floor(Math.random()*255)+1;
            let rand3Value = Math.floor(Math.random()*255)+1;

            

            event.target.style.backgroundColor = "rgb("+rand1Value+","+rand2Value+","+rand3Value+")";
                
            }   
        }   
    });



// Make a button that can change the size of the canvas
// by deleting all the pixels and replacing them with the
// new size

sizeChangeButton.addEventListener("click",function(){
    let tempSize = prompt("Canvas Size: ");

    if(tempSize != size)
    {
        deleteCanvas(size);
        generateCanvas(tempSize);
        size = tempSize;
    }
    
})

sizeButton.addEventListener("click",function(){

    if(cycle != 3)
    {
        cycle++;
    }
    else
    {
        cycle = 0;
    }

    let currentSize = sizeScale[cycle];
    sizeButton.textContent = sizeScale[cycle] + "px";
    sizeButton.style.fontWeight = (100*currentSize)+100;

});

function generateCanvas(length){
    for(let row = 1; row <= length; row++)
    {
        for(let column = 1; column <= length; column++)
        {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");

            pixel.id = row + "." + column;

            pixel.style.backgroundColor = "black";

            let pixelSize = 1600/length;

            pixel.style.width = pixelSize + "px";
            pixel.style.height = pixelSize + "px";

            container.appendChild(pixel);           
        }
    }
}

//Keep researching on how to fix the delete function

function deleteCanvas(length){
  
   for(let row = 1; row <= length; row++)
   {
    for(let column = 1; column <= length; column++)
    {
        let currentElement = document.getElementById(row+"."+column);
        currentElement.remove();
    }
   }
}
















