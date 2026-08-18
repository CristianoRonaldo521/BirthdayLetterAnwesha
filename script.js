/* =========================================
   WESHA SCRAPBOOK
========================================= */


/* =========================================
   ENVELOPE
========================================= */

const envelope = document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

        if (envelope.classList.contains("open")) {

            createHeartBurst();

        }

    });

}


/* =========================================
   SECRET BOX
========================================= */

const secretBox = document.getElementById("secretBox");

if (secretBox) {

    secretBox.addEventListener("click", () => {

        secretBox.classList.toggle("open");

        if (secretBox.classList.contains("open")) {

            createHeartBurst();

        }

    });

}


/* =========================================
   PHOTO LIGHTBOX
========================================= */

const photos = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");


photos.forEach(photo => {

    photo.addEventListener("click", (event) => {

        event.stopPropagation();

        lightboxImage.src = photo.src;

        lightbox.classList.add("active");

    });

});


if (closeLightbox) {

    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}


if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}


/* ESC TO CLOSE PHOTO */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});


/* =========================================
   LITTLE HEARTS WHEN CLICKING
========================================= */

function createHeartBurst() {

    for (let i = 0; i < 12; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

        heart.style.position = "fixed";

        heart.style.left = (40 + Math.random() * 20) + "%";

        heart.style.top = (40 + Math.random() * 20) + "%";

        heart.style.color =
            Math.random() > 0.5
                ? "#c97b7b"
                : "#e0cba8";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "3000";

        document.body.appendChild(heart);


        const x =
            (Math.random() - 0.5) * 500;

        const y =
            -(100 + Math.random() * 350);


        heart.animate(

            [
                {
                    transform: "translate(0,0) scale(.5)",
                    opacity: 0
                },

                {
                    transform:
                        `translate(${x / 2}px, ${y / 2}px) scale(1.2)`,
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(.7)`,
                    opacity: 0
                }
            ],

            {
                duration: 1400 + Math.random() * 700,

                easing: "cubic-bezier(.2,.8,.2,1)"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}


/* =========================================
   CLICK ANYWHERE → TINY HEART
========================================= */

document.addEventListener("click", (event) => {

    if (
        event.target.closest(".photo-card") ||
        event.target.closest(".envelope") ||
        event.target.closest(".secret-box") ||
        event.target.closest(".scrapbook-button")
    ) {
        return;
    }


    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";

    heart.style.left = event.clientX + "px";

    heart.style.top = event.clientY + "px";

    heart.style.color = "#b96d73";

    heart.style.fontSize = "22px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "5000";


    document.body.appendChild(heart);


    heart.animate(

        [
            {
                transform: "translate(-50%, -50%) scale(.5)",
                opacity: 0
            },

            {
                transform: "translate(-50%, -90%) scale(1)",
                opacity: 1
            },

            {
                transform: "translate(-50%, -160%) scale(.6)",
                opacity: 0
            }
        ],

        {
            duration: 900,

            easing: "ease-out"
        }

    );


    setTimeout(() => {

        heart.remove();

    }, 1000);

});


/* =========================================
   LITTLE SCROLL REVEALS
========================================= */

const revealElements = document.querySelectorAll(
    ".photo-card, .gift-paper, .distance-card, .final-photo"
);


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
`
♡ ♡ ♡

Happy Birthday Weshaaaaaaaa!

Wesshaacattt
Bestieeeweshaaa
Meoweeshaaa
Tulipppweshaaa

Made with love by Rayhaan.

♡ ♡ ♡
`
);