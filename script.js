```javascript
/* ================================
   MOBILE NAVIGATION
================================ */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("active");

    }
);



/* ================================
   CLOSE MOBILE MENU
================================ */

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("active");

            }
        );

    }
);



/* ================================
   PHOTO LIGHTBOX
================================ */

const photoItems =
    document.querySelectorAll(
        ".photo-item img"
    );


const lightbox =
    document.getElementById("lightbox");


const lightboxImage =
    document.getElementById("lightboxImage");


const lightboxClose =
    document.getElementById("lightboxClose");



photoItems.forEach(
    function (image) {

        image.addEventListener(
            "click",
            function () {

                lightboxImage.src =
                    image.src;

                lightbox.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



/* ================================
   CLOSE LIGHTBOX
================================ */

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

    lightboxImage.src =
        "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);



/* ================================
   CLICK OUTSIDE IMAGE
================================ */

lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);



/* ================================
   ESCAPE KEY
================================ */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);



/* ================================
   GOOGLE DRIVE FULLSCREEN
================================ */

const videoFrames =
    document.querySelectorAll(
        ".video-wrapper iframe"
    );


videoFrames.forEach(
    function (frame) {

        frame.setAttribute(
            "allowfullscreen",
            ""
        );

        frame.setAttribute(
            "allow",
            "autoplay; fullscreen; picture-in-picture"
        );

    }
);
```