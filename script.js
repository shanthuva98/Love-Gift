const correctPassword = "11081998"; // 👈 Birthday date

function checkPassword() {
    const input = document.getElementById("passwordInput").value;

    if (input === correctPassword) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
        playMusic();
        createHearts();
    } else {
        document.getElementById("error").innerText = "Wrong date 💔 Try again";
    }
}


function goToStory() {
    document.querySelector(".welcome").style.display = "none";

    document.getElementById("story").classList.remove("hidden");
    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("message").classList.remove("hidden");
}
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
const text = "You are not just my love... you are my home, my peace, my forever ❤️";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typeText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
    }
}
setTimeout(() => {
    document.getElementById("ending").classList.remove("hidden");
}, 20000);
