const btn = document.getElementById('contactBtn');
const targetDiv = document.getElementById('sectionContainer4');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');


btn.addEventListener("click", scrollToBottom);

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    nav.style.width = "100%";
    hamburger.classList.toggle("change");
});

function scrollToBottom(){
    targetDiv.scrollIntoView({behavior: "smooth"});
}