const statrElem = document.querySelector("[data-start-screen]");
const scoreElem = document.querySelector("[data-score]");


let score = 0;
var ok = 0;
var ok_2 = 0;
var time = 3;
var timing = document.documentElement;

var robot = document.getElementById("robot");
var object = document.getElementById("object");

document.addEventListener("mousedown", function(event) {
    remove();
});

document.addEventListener("mousedown", function(event) {
    if (ok == 0) {
        updatescore();
        ok = 1;
    }
});

function remove() {
    statrElem.classList.add("hide");
}

function updatescore() {

    setTimeout(() => {
        score = score + 1;
        scoreElem.textContent = Math.floor(score);
        updatescore();
    }, 500);

}

document.addEventListener("mousedown", (e) => {
    e = e || window.event;
    switch (e.which) {
      case 1: normal_jump(); break;
      case 3: double_jump(); break; 
    }
});

window.addEventListener("contextmenu", (e) => e.preventDefault());

function normal_jump() {
    if (robot.classList != "robot_jump") {
        robot.classList.add("robot_jump");
        setTimeout(() => {
            robot.classList.remove("robot_jump");
        }, 500);
    }
}

function double_jump() {
    if (robot.classList != "robot_double_jump") {
        robot.classList.add("robot_double_jump");
        setTimeout(() => {
            robot.classList.remove("robot_double_jump");
        }, 700);
    }
}

document.addEventListener("mousedown", () => {
    object.classList.add("object_move");
});