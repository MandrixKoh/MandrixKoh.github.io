const hamburger = document.getElementById("MobileMenu");
const navButtons = document.querySelectorAll("nav button");
const background = document.querySelector(".Home");
const nav = document.querySelector("nav");

//Nav bar stuff//
const GardenBtn = document.getElementById("GardenBtn");
const HomeBtn = document.getElementById("HomeBtn");
const SoilBtn = document.getElementById("SoilBtn");
const PestBtn = document.getElementById("PestBtn");

//Articals for each page//
const HomePg = document.querySelector(".Home");
const GardenPg = document.querySelector(".TypesOfGarden");
const SoilPg = document.querySelector(".TypesOfSoil");
const PestPg = document.querySelector(".CommonPest");

//Stores page no in//
var PageNo = 1;

//plays the music//
const popAudio = new Audio("TianTianLoop.ogg3");
//loops the music//
popAudio.loop = true;
popAudio.play();

/*Hamburger Menu for phone*/
hamburger.addEventListener("click", () => {
    navButtons.forEach(button => {
        nav.classList.toggle("opened");
        button.classList.toggle("show");
    });
    background.classList.toggle("Opened");
});

/*Spawn all the website as closed except home page*/
HomePg.classList.add("closed");
GardenPg.classList.remove("closed");
PestPg.classList.add("closed");
SoilPg.classList.add("closed");

HomeBtn.addEventListener("click", () => {
    HomePg.classList.remove("closed");
    GardenPg.classList.add("closed");
    PestPg.classList.add("closed");
    SoilPg.classList.add("closed");
})

GardenBtn.addEventListener("click", () => {
    HomePg.classList.add("closed");
    GardenPg.classList.remove("closed");
    PestPg.classList.add("closed");
    SoilPg.classList.add("closed");

    PageNo = 1;
})

SoilBtn.addEventListener("click", () => {
    HomePg.classList.add("closed");
    GardenPg.classList.add("closed");
    PestPg.classList.add("closed");
    SoilPg.classList.remove("closed");
})

PestBtn.addEventListener("click", () => {
    HomePg.classList.add("closed");
    GardenPg.classList.add("closed");
    PestPg.classList.remove("closed");
    SoilPg.classList.add("closed");
})

//Nav bar stuff end//
const leftarrow = document.getElementById("Left");
const rightarrow = document.getElementById("Right");

const FlowerGarden = document.querySelector(".Flower");
const VegetableGarden = document.querySelector(".Vegetable");
const ContainerGarden = document.querySelector(".Container");

//Spawn all pages closed except flower garden//
VegetableGarden.classList.add("closed");
ContainerGarden.classList.add("closed");

function GardenPageUpdate (PageNo) {
    if (PageNo == 1) {
        FlowerGarden.classList.remove("closed");
        FlowerGarden.classList.add("fade-in");
        setTimeout(() => FlowerGarden.classList.remove("fade-in"), 400);

        VegetableGarden.classList.add("closed");
        ContainerGarden.classList.add("closed");
    }
    else if (PageNo == 2) {
        VegetableGarden.classList.remove("closed");
        VegetableGarden.classList.add("fade-in");
        setTimeout(() => VegetableGarden.classList.remove("fade-in"), 400);

        FlowerGarden.classList.add("closed");
        ContainerGarden.classList.add("closed");
    }
    else if (PageNo == 3) {
        ContainerGarden.classList.remove("closed");
        ContainerGarden.classList.add("fade-in");
        setTimeout(() => ContainerGarden.classList.remove("fade-in"), 400);

        FlowerGarden.classList.add("closed");
        VegetableGarden.classList.add("closed");
    }
}
//Click arrow swap page//
rightarrow.addEventListener("click", () => {
    PageNo += 1;
    if(PageNo >= 4) {
        PageNo = 1;
    }
   GardenPageUpdate(PageNo);
    
})

leftarrow.addEventListener("click", () => {
    PageNo -= 1;
    if(PageNo <= 0) {
        PageNo = 3;
    }
    GardenPageUpdate(PageNo);
})

