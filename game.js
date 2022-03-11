const statrElem=document.querySelector("[data-start-screen]");
var robot = document.getElementById("robot");

document.addEventListener("keydown",function(event){
    remove();
});

function remove(){
    statrElem.classList.add("hide"); 
}

document.addEventListener("keydown", () => {
    jump();
});

function jump() {
    if (robot.classList != "robot_jump")
    {
        robot.classList.add("robot_jump");
        setTimeout( () => {
            robot.classList.remove("robot_jump");
        }, 500);
    }
}