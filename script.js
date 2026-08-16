function nextPage(pageNumber) {
    // Sabhi pages hide karo
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Selected page show karo
    const next = document.getElementById("page" + pageNumber);

    if (next) {
        next.classList.add("active");
    }

    // Screen ko top par le jao
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// NO button ko move karna
function moveButton(button) {

    const maxX = 100;
    const maxY = 80;

    const randomX = Math.floor(Math.random() * (maxX * 2 + 1)) - maxX;
    const randomY = Math.floor(Math.random() * (maxY * 2 + 1)) - maxY;

    button.style.transform =
        "translate(" + randomX + "px, " + randomY + "px)";
}


// Restart button
function restart() {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById("page1").classList.add("active");
}


// Extra floating hearts create karna
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";

    document.body.appendChild(heart);

    const duration = 4000 + Math.random() * 3000;

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },
            {
                transform:
                    "translateY(-50vh) rotate(180deg)",
                opacity: 1
            },
            {
                transform:
                    "translateY(-110vh) rotate(360deg)",
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(function() {
        heart.remove();
    }, duration);
}


// Har thodi der mein heart 
setInterval(createHeart, 700);