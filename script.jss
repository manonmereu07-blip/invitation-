let selectedDate = "";


function startMission() {

    document.getElementById("intro").classList.remove("active");

    document.getElementById("mission").classList.add("active");

}



function chooseDate(button) {

    document.querySelectorAll(".choices button")
        .forEach(btn => btn.classList.remove("selected"));


    button.classList.add("selected");


    selectedDate = button.innerHTML;

}



function moveNoButton() {

    const button = document.getElementById("noButton");


    const x = Math.random() * 250 - 125;

    const y = Math.random() * 150 - 75;


    button.style.transform =
        `translate(${x}px, ${y}px)`;

}



function acceptMission() {


    document.getElementById("mission")
        .classList.remove("active");


    document.getElementById("final")
        .classList.add("active");


    createHearts();


}



function createHearts() {


    const heartsContainer =
        document.querySelector(".hearts");


    for (let i = 0; i < 25; i++) {


        const heart =
            document.createElement("span");


        heart.innerHTML = "❤️";


        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.top = "100vh";


        heart.style.fontSize =
            (Math.random() * 25 + 15) + "px";


        heart.style.animation =
            "fly 3s linear forwards";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        heartsContainer.appendChild(heart);

    }


}



const style =
document.createElement("style");


style.innerHTML = `

@keyframes fly {

    from {

        transform: translateY(0) rotate(0deg);

        opacity:1;

    }


    to {

        transform:
        translateY(-120vh)
        rotate(360deg);

        opacity:0;

    }

}

`;


document.head.appendChild(style);
