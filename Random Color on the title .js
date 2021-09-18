//Randomization Color When the users click on the title is Click me

const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const ranColor = ["blue", "red", "green", "yellow"];

    let num = Math.floor(Math.random() * ranColor.length);
    title.style.color = ranColor[num];
}

title.addEventListener("click", handleTitleClick);
