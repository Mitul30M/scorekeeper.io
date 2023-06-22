const h3 = document.querySelector("h3");

const p1Score = document.querySelector(".plr1");
const p2Score = document.querySelector(".plr2");

const rounds = document.querySelector(".rounds");

let wins = 3;

rounds.addEventListener("change", (evt) => {
    wins = parseInt(rounds.value);
});

let isGameOver = false;

const p1add = document.querySelector(".plyr1");
const p2add = document.querySelector(".plyr2");

const img = document.querySelector(".imgCard");
const reset = document.querySelector(".reset");

p1add.addEventListener("click", (evt) => {
    
    if (!isGameOver) {
        let inInt = parseInt(p1Score.innerHTML);
        rounds.setAttribute("disabled", "");
        inInt++;

        p1Score.innerHTML = inInt;
    
        if (inInt === wins) {
            isGameOver = true;
            img.src = "screens/green.png";
            h3.innerHTML = "Player One wins!";
            h3.style.color = "#80ed99";
        }
    }

});

p2add.addEventListener("click", (evt) => {

   if (!isGameOver) {
        let inInt = parseInt(p2Score.innerHTML);
        rounds.setAttribute("disabled", "");
        inInt++;

        p2Score.innerHTML = inInt;
    
        if (inInt === wins) {
            isGameOver = true;
            img.src = "screens/red.png";
            h3.innerHTML = "Player Two wins!";
            h3.style.color = "#e63946"
        }
    }



});

reset.addEventListener("click", (evt) => {
    p1Score.innerHTML = "0";
    p2Score.innerHTML = "0";
    img.src = "screens/black.png";
    isGameOver = false;
    wins = parseInt(rounds.value);
    console.log("Scores are reset to 0-0");
    h3.innerHTML = "Score Keeper";
    h3.style.color = "black";
    rounds.removeAttribute("disabled","");

});

