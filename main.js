"use-strict";
const secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector(".head").textContent = ;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let num = Number(document.querySelector(".box").value);
  if (!num) {
    document.querySelector(".message").textContent = "Enter a no. please";
  } else if (num === secrectNumber) {
    document.querySelector(".message").textContent = "👏👏Correct You Won";
    document.querySelector(".head").textContent = secrectNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".head").style.height = "10rem";
    document.querySelector(".head").style.width = "10rem";
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(
      ".HiScore"
    ).textContent = `👏High Score=${highScore}`;
  } else if (num !== secrectNumber) {
    document.querySelector(".message").textContent =
      num > secrectNumber ? "👀👀Too High" : "🚲🚲Too Low";
    score--;
    document.querySelector(".score").textContent = `👌Score = ${score}`;
    if (score < 1) {
      document.querySelector(".message").textContent = "You Lose the game";
    }
  }
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".head").textContent = "?";
    document.querySelector(".score").textContent = `👌Score = ${score}`;
    document.querySelector(".message").textContent = "Enter a no. please";
    document.querySelector(".box").value = "";
    document.querySelector("body").style.backgroundColor = "black";
  });
});
