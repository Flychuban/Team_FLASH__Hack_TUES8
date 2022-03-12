const statrElem = document.querySelector("[data-start-screen]");
const scoreElem = document.querySelector("[data-score]");
const endElem = document.querySelector("[data-end-screen]");

var isGameOver = false;
let score = 0;
var ok = 0;
var ok_2 = 0;
var jump_audio = new Audio("/images/jump_audio_trimed.mp3");
var game_over = new Audio("/images/gameover_sound_trimed.mp3");

var robot = document.getElementById("robot");
var object = document.getElementById("object");
var object2 = document.getElementById("object2");
var reset_button = document.getElementById("reset_button");

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
        if (isGameOver == false) {
            score = score + 1;
            scoreElem.textContent = Math.floor(score);
            updatescore();
        }
    }, 500);
}

window.setInterval(() => {
    if (isGameOver == false) {
        if (score <= 20) {
            object2.classList.add("hide");
        } else {
            object2.classList.add("object2_move");
            object2.classList.remove("hide");
        }
    }
}, 1);

document.addEventListener("mousedown", (e) => {
    if (isGameOver == false) {
        e = e || window.event;
        switch (e.which) {
            case 1:
                normal_jump();
                jump_audio.play();
                break;
            case 3:
                double_jump();
                jump_audio.play();
                break;
        }
    }
});

window.addEventListener("contextmenu", (e) => e.preventDefault());

function normal_jump() {
    if (robot.classList != "robot_jump") {
        robot.classList.add("robot_jump");
        setTimeout(() => {
            robot.classList.remove("robot_jump");
        }, 650);
    }
}

function double_jump() {
    if (robot.classList != "robot_double_jump") {
        robot.classList.add("robot_double_jump");
        setTimeout(() => {
            robot.classList.remove("robot_double_jump");
        }, 900);
    }
}

document.addEventListener("mousedown", () => {
    object.classList.add("object_move");
});

window.setInterval(() => {
    objectLeft = parseInt(getComputedStyle(object).getPropertyValue("left"));
    object2Left = parseInt(getComputedStyle(object2).getPropertyValue("left"));

    if (objectLeft < 0) object.classList.add("hide");
    setTimeout(() => {
        if (isGameOver == false)
            object.classList.remove("hide");
    }, 350);

    if (object2Left < 0) object2.classList.add("hide");
    setTimeout(() => {
        if (isGameOver == false && score > 20)
            object2.classList.remove("hide");
    }, 350);

}, 50);

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

window.setInterval(() => {
    if (collision(robot, object) == true) {
        isGameOver = true;
        game_over.play();
        reset_button.classList.remove("hide");
        endElem.classList.remove("hide");
        object.classList.add("hide");
        object2.classList.add("hide");
    }
    if (collision2(robot, object2) == true) {
        isGameOver = true;
        game_over.play();
        reset_button.classList.remove("hide");
        endElem.classList.remove("hide");
        object.classList.add("hide");
        object2.classList.add("hide");
    }
}, 50);

window.addEventListener("load", () => {
    endElem.classList.add("hide");
    reset_button.classList.add("hide");
});