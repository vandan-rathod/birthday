const prankbtn = document.getElementById("prankbtn");
const photocard = document.getElementById("photocard");
const loading = document.getElementById("loading");
const warning = document.getElementById("warning");
const reveal = document.getElementById("reveal");
const loveLetter = document.getElementById("loveLetter");
const startScreen = document.getElementById("startScreen"); 
let clickCount = 0;
const texts =[
    "Not yet 😏 click again!",
  "Hehe still nothing 😂",
  "Fine fine… one last time 👀",
  "Okay okay, here you go 🎁"
];

prankbtn.addEventListener("click", ()=>{
    clickCount++;

    if (clickCount===1) {
        warning.style.display = "none";
    }

    if (clickCount<5) {
        //change button text
        prankbtn.textContent=texts[clickCount-1];

        // move button randomly on the screen
        const btnWidth = prankbtn.offsetWidth;
        const btnHeight = prankbtn.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const maxX = screenWidth - btnWidth;
        const maxY = screenHeight - btnHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        prankbtn.style.left = randomX + "px";
        prankbtn.style.top = randomY + "px";

    } else{
        prankbtn.style.display="none";
        loading.classList.remove("hidden");
        
        setTimeout(()=>{
            loading.classList.add("hidden");
            reveal.classList.remove("hidden");
        },5000);
    }
});

// spacebar = show photocard and then love letter
document.addEventListener("keydown", (e) => {
    if ((e.code === "Space" || e.key === " ") && !reveal.classList.contains("hidden")) {
        // intro → photocard
        reveal.classList.add("hidden");
        photocard.classList.remove("hidden");
    } 
    else if ((e.code === "Space" || e.key === " ") && !photocard.classList.contains("hidden")) {
        // photocard → love letter
        photocard.classList.add("hidden");
        loveLetter.classList.remove("hidden");
        loveLetter.classList.remove("hidden");
        typeLetter("From the moment you entered my life, everything changed. You’re not just my girlfriend—you’re my best friend, my safe place, and the most beautiful part of every single day. No matter where we are, my heart is always with you. Happy Birthday, my forever love ❤️", loveLetter);

    }
});
function typeLetter(text, element) {
  element.textContent = "";
  let i = 0;
  let interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}

