const statrElem = document.querySelector("[data-start-screen]");
const scoreElem = document.querySelector("[data-score]");

let score = 0;
var ok = 0;
var ok_2 = 0;
var time = 3;
var timing = document.documentElement;

var robot = document.getElementById("robot");
var object = document.getElementById("object");
var object2 = document.getElementById("object2");

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

window.setInterval(() => {
    if (score <= 10) {
        object2.classList.add("hide");
    } else {
        object2.classList.add("object2_move");
        object2.classList.remove("hide");
    }
}, 1)

document.addEventListener("mousedown", (e) => {
    e = e || window.event;
    switch (e.which) {
        case 1:
            normal_jump();
            break;
        case 3:
            double_jump();
            break;
    }
});

window.addEventListener("contextmenu", (e) => e.preventDefault());

function normal_jump() {
    if (robot.classList != "robot_jump") {
        robot.classList.add("robot_jump");
        setTimeout(() => {
            robot.classList.remove("robot_jump");
        }, 600);
    }
}

function double_jump() {
    if (robot.classList != "robot_double_jump") {
        robot.classList.add("robot_double_jump");
        setTimeout(() => {
            robot.classList.remove("robot_double_jump");
        }, 800);
    }
}

document.addEventListener("mousedown", () => {
    object.classList.add("object_move");
});

function collision(robot, object) {
    var robotPos = robot.getBoundingClientRect();
    var objectPos = object.getBoundingClientRect();

    return !(
        ((robotPos.top + robotPos.height) < (objectPos.top)) ||
        (robotPos.top > (objectPos.top + objectPos.height)) ||
        ((robotPos.left + robotPos.width) < objectPos.left) ||
        (robotPos.left > (objectPos.left + objectPos.width))
    );
}

function collision2(robot, object2) {
    var robotPos = robot.getBoundingClientRect();
    var object2Pos = object2.getBoundingClientRect();

    return !(
        ((robotPos.top + robotPos.height) < (object2Pos.top)) ||
        (robotPos.top > (object2Pos.top + object2Pos.height)) ||
        ((robotPos.left + robotPos.width) < object2Pos.left) ||
        (robotPos.left > (object2Pos.left + object2Pos.width))
    );
}

window.setInterval( () => {
    if (collision(robot, object) == true) alert("colision");
    if (collision2(robot, object2) == true) alert("colision");
}, 50);