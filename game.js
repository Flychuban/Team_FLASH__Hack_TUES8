const statrElem=document.querySelector("[data-start-screen]");

document.addEventListener("keydown",function(event){
    remove();
});

function remove(){
    statrElem.classList.add("hide"); 
}