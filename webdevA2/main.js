const hamburger = document.getElementById("MobileMenu");
const navButtons = document.querySelectorAll("nav button");
const background = document.querySelector(".Home");
const nav = document.querySelector("nav");

// Nav bar buttons
const GardenBtn = document.getElementById("GardenBtn");
const HomeBtn = document.getElementById("HomeBtn");
const SoilBtn = document.getElementById("SoilBtn");
const PestBtn = document.getElementById("PestBtn");

// Articles for each page
const HomePg = document.querySelector(".Home");
const GardenPg = document.querySelector(".TypesOfGarden");
const SoilPg = document.querySelector(".TypesOfSoil");
const PestPg = document.querySelector(".CommonPest");

var PageNo = 1;

/* Hamburger menu for mobile */
hamburger.addEventListener("click", function () {
    navButtons.forEach(function (button) {
        nav.classList.toggle("opened");
        button.classList.toggle("show");
    });
    background.classList.toggle("Opened");
});

/* Spawn all the website as closed except home page */
HomePg.classList.remove("closed");
GardenPg.classList.add("closed");
PestPg.classList.add("closed");
SoilPg.classList.add("closed");

HomeBtn.addEventListener("click", function () {
    HomePg.classList.remove("closed");
    GardenPg.classList.add("closed");
    PestPg.classList.add("closed");
    SoilPg.classList.add("closed");
});

GardenBtn.addEventListener("click", function () {
    HomePg.classList.add("closed");
    GardenPg.classList.remove("closed");
    PestPg.classList.add("closed");
    SoilPg.classList.add("closed");
    PageNo = 1;
});

SoilBtn.addEventListener("click", function () {
    HomePg.classList.add("closed");
    GardenPg.classList.add("closed");
    PestPg.classList.add("closed");
    SoilPg.classList.remove("closed");
});

PestBtn.addEventListener("click", function () {
    HomePg.classList.add("closed");
    GardenPg.classList.add("closed");
    PestPg.classList.remove("closed");
    SoilPg.classList.add("closed");
});

// Arrows for garden pages
const leftarrow = document.getElementById("Left");
const rightarrow = document.getElementById("Right");

const FlowerGarden = document.querySelector(".Flower");
const VegetableGarden = document.querySelector(".Vegetable");
const ContainerGarden = document.querySelector(".Container");

VegetableGarden.classList.add("closed");
ContainerGarden.classList.add("closed");

function GardenPageUpdate(PageNo) {
    FlowerGarden.classList.add("closed");
    VegetableGarden.classList.add("closed");
    ContainerGarden.classList.add("closed");

    if (PageNo === 1) {
        FlowerGarden.classList.remove("closed");
        FlowerGarden.classList.add("fade-in");
        setTimeout(function() {
            FlowerGarden.classList.remove("fade-in");
        }, 400);
    } else if (PageNo === 2) {
        VegetableGarden.classList.remove("closed");
        VegetableGarden.classList.add("fade-in");
        setTimeout(function() {
            VegetableGarden.classList.remove("fade-in");
        }, 400);
    } else if (PageNo === 3) {
        ContainerGarden.classList.remove("closed");
        ContainerGarden.classList.add("fade-in");
        setTimeout(function() {
            ContainerGarden.classList.remove("fade-in");
        }, 400);
    }
}

rightarrow.addEventListener("click", function () {
    PageNo = PageNo >= 3 ? 1 : PageNo + 1;
    GardenPageUpdate(PageNo);
});

leftarrow.addEventListener("click", function () {
    PageNo = PageNo <= 1 ? 3 : PageNo - 1;
    GardenPageUpdate(PageNo);
});

// Soil flip cards
const soilGrid = document.querySelector('.soil-grid');
soilGrid.addEventListener('click', function (event) {
    const card = event.target.closest('.flip-card');
    if (card && soilGrid.contains(card)) {
        card.classList.toggle('flipped');
    }
});

// Pest quiz
const correctAnswers = ["worm", "butterfly", "ant", "snail", "caterpillar"];
const newImages = [
    "/images/Worm.jpg",
    "/images/Butterfly.jpg",
    "/images/Ant.jpg",
    "/images/Snail.jpg",
    "/images/Cater.jpg"
];

const quizRows = document.querySelectorAll(".QuizContainer form div");

quizRows.forEach(function (row, index) {
    const input = row.querySelector("input");
    const img = row.querySelector("img");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = correctAnswers[index].toLowerCase();

            if (userAnswer === correctAnswer) {
                img.classList.add("fade-out");
                setTimeout(function () {
                    img.classList.remove("fade-out");
                    img.src = newImages[index];
                }, 200);
                input.style.border = "2px solid green";
            } else {
                input.style.border = "2px solid red";
            }
        }
    });
});

// Worm Catch Game
const apple = document.getElementById("apple"); 
const worm = document.getElementById("Worm");
const scoreBox = document.getElementById("scoreBox");
const Timer = document.getElementById("Timer");
const playArea = document.querySelector(".PlayArea");

let moveAppleItvId;
let moveWormItvId;
let countdownInterval;
let TimeoutStopper;
let score = 0;
let timeleft = 30;
let gameStarted = false;

function MoveApple() {
    const maxX = playArea.clientWidth - apple.clientWidth;
    const maxY = playArea.clientHeight - apple.clientHeight;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    apple.style.left = randX + "px";
    apple.style.top = randY + "px";
}

function MoveWorm() {
    const maxX = playArea.clientWidth - worm.clientWidth;
    const maxY = playArea.clientHeight - worm.clientHeight;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    worm.style.left = randX + "px";
    worm.style.top = randY + "px";
}

function GameStart() {
    Timer.innerHTML = "Time: " + timeleft + "s";
    startCountdown();
    moveAppleItvId = setInterval(MoveApple, 2000);
    moveWormItvId = setInterval(MoveWorm, 1000);
    TimeoutStopper = setTimeout(Timechange, 20000);
}

function startCountdown() {
    Timer.innerHTML = "Time: " + timeleft + "s";
    countdownInterval = setInterval(function () {
        timeleft--;
        Timer.innerHTML = "Time: " + timeleft + "s";

        if (timeleft <= 0) {
            gameStarted = false;
            clearInterval(countdownInterval);
            clearInterval(moveAppleItvId);
            clearInterval(moveWormItvId);
            clearInterval(TimeoutStopper);
            Timer.innerHTML = "Time: 0s - Game Over! Press the worm to restart";
        }
    }, 1000);
}

function AppleCatch() {
    if (timeleft <= 0) {
        RestartGame();
        return;
    }

    score += 1;
    scoreBox.innerHTML = "Score: " + score;

    const AppleSound = new Audio("/audio/splat.mp3");
    AppleSound.play();

    if (!gameStarted) {
        GameStart();
        gameStarted = true;
    }

    apple.src = "images/GoodApple.jpg";
    setTimeout(ChangeSprite, 500);
}

function WormCatch() {
    if (timeleft <= 0) {
        RestartGame();
        return;
    }

    score -= 1;
    scoreBox.innerHTML = "Score: " + score;

    const WormSound = new Audio("audio/angry.mp3");
    WormSound.play();

    if (!gameStarted) {
        GameStart();
        gameStarted = true;
    }

    worm.src = "images/EvilWorm.jpg";
    setTimeout(ChangeSprite2, 500);
}


apple.addEventListener("click", AppleCatch);
worm.addEventListener("click", WormCatch);


function ChangeSprite() {
    apple.src = "images/Apple.jpg";
}

function ChangeSprite2() {
    worm.src = "images/RottenApple.jpg";
}

function Timechange() {
    clearInterval(moveAppleItvId);
    clearInterval(moveWormItvId);
    moveAppleItvId = setInterval(MoveApple, 500);
    moveWormItvId = setInterval(MoveWorm, 1000);
    console.log("Worm speed increased!");
}

function RestartGame() {
    score = 0;
    timeleft = 30;
    gameStarted = false;

    scoreBox.innerHTML = "Score: 0";
    Timer.innerHTML = "Time: 30s";
    apple.src = "images/Apple.jpg";
    worm.src = "images/RottenApple.jpg";

    clearInterval(countdownInterval);
    clearInterval(moveAppleItvId);
    clearInterval(moveWormItvId);
    clearTimeout(TimeoutStopper);

}
