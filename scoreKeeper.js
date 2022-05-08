const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const reset = document.querySelector("#reset");
let x = 0,
    y = 0,
    maxScore = 5;

const select = document.querySelector("#play");

select.addEventListener("change", e => {
    maxScore = e.target.value;
    console.log(maxScore);
})

player1.addEventListener("click", () => {
    score1.innerText++;
    x++;
    if (check(x)) {
        score1.classList.add("green");
        score2.classList.add("red");
    }
})
player2.addEventListener("click", () => {
    score2.innerText++;
    y++;
    if (check(y)) {
        score2.classList.add("green");
        score1.classList.add("red");
    }
})

function check(score) {
    if (score == maxScore) {
        player1.disabled = true;
        player2.disabled = true;
        return true;
    } else
        return false;
}

reset.addEventListener("click", () => {
    score1.innerText = 0;
    score2.innerText = 0;
    player1.disabled = false;
    player2.disabled = false;
    score1.classList.remove("red");
    score2.classList.remove("red");
    score1.classList.remove("green");
    score2.classList.remove("green");
})