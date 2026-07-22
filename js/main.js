// ==========================
// Draftix Atmosphere v0.3
// ==========================



// Создание частиц пыли

const dustContainer =
document.querySelector(".dust-container");


if(dustContainer){


for(let i = 0; i < 45; i++){


const dust =
document.createElement("div");


dust.className="dust";


dust.style.left =
Math.random()*100+"%";


dust.style.top =
Math.random()*100+"%";


dust.style.animationDuration =
(8 + Math.random()*12)+"s";


dust.style.animationDelay =
Math.random()*10+"s";


dustContainer.appendChild(dust);


}

}




// Параллакс


const atmosphere =
document.querySelector(".atmosphere");


if(atmosphere){


document.addEventListener(
"mousemove",
(e)=>{


const x =
(e.clientX /
window.innerWidth - 0.5);


const y =
(e.clientY /
window.innerHeight - 0.5);



atmosphere.style.transform =
`
translate(
${x*20}px,
${y*20}px
)
`;



});


}