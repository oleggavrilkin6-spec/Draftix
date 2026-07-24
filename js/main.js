/* =====================================================
   DRAFTIX SIMPLE LANDING PAGE
   JavaScript
===================================================== */



// =====================================================
// FLOATING DUST PARTICLES
// =====================================================


const particlesContainer = 
document.querySelector(".particles");



if (particlesContainer) {


    const particleCount = 45;



    for (let i = 0; i < particleCount; i++) {


        const particle = document.createElement("span");


        particle.className = "particle";



        particle.style.left = 
            Math.random() * 100 + "%";



        particle.style.top = 
            Math.random() * 100 + "%";



        const size = 
            Math.random() * 4 + 2;



        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";



        particle.style.animationDuration =
            (8 + Math.random() * 15) + "s";



        particle.style.animationDelay =
            Math.random() * 10 + "s";



        particlesContainer.appendChild(particle);


    }


}



// =====================================================
// ADD PARTICLE STYLE
// =====================================================


const style = document.createElement("style");


style.innerHTML = `


.particle {


    position:absolute;


    background:

        rgba(255,230,160,.45);



    border-radius:50%;



    filter:blur(.5px);



    animation:

        particleMove

        linear

        infinite;



}



@keyframes particleMove {


    0% {


        transform:

            translateY(40px);



        opacity:0;



    }



    20% {


        opacity:1;



    }



    80% {


        opacity:.7;



    }



    100% {


        transform:

            translate(

                80px,

                -200px

            );



        opacity:0;



    }


}



`;



document.head.appendChild(style);





// =====================================================
// SIMPLE MOUSE PARALLAX
// =====================================================



const background = 
document.querySelector(".background");



document.addEventListener(
"mousemove",
(event)=>{


    if(!background) return;



    const x = 
        (event.clientX / window.innerWidth - .5);



    const y =
        (event.clientY / window.innerHeight - .5);



    background.style.transform =

        `
        scale(1.06)
        translate(
            ${x * 15}px,
            ${y * 15}px
        )
        `;


});
