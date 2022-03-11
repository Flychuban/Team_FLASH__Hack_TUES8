const statrElem = document.querySelector("[data-start-screen]");
const scoreElem = document.querySelector("[data-score]");
let score = 0;
var ok = 0;

var robot = document.getElementById("robot");

document.addEventListener("keydown", function(event) {
    remove();
});

document.addEventListener("keydown", function(event) {
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

document.addEventListener("keydown", () => {
    jump();
});

function jump() {
    if (robot.classList != "robot_jump") {
        robot.classList.add("robot_jump");
        setTimeout(() => {
            robot.classList.remove("robot_jump");
        }, 500);
    }
}