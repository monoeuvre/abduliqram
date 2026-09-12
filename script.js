```javascript
/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("active");


        const isOpen =
            navMenu.classList.contains("active");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        if (isOpen) {

            menuToggle.innerHTML = "×";


            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            menuToggle.innerHTML = "☰";


            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    }
);



/* ==========================================
   CLOSE MOBILE MENU
   WHEN NAVIGATION LINK IS CLICKED
========================================== */

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove(
                    "active"
                );


                menuToggle.innerHTML = "☰";


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }
        );

    }
);



/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener(
    "click",
    function (event) {

        const clickedInsideMenu =
            navMenu.contains(event.target);


        const clickedMenuButton =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove(
                "active"
            );


            menuToggle.innerHTML = "☰";


            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);



/* ==========================================
   PHOTO LIGHTBOX
========================================== */

const photoItems =
    document.querySelectorAll(
        ".photo-item img"
    );


const lightbox =
    document.getElementById(
        "lightbox"
    );


const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );


const lightboxClose =
    document.getElementById(
        "lightboxClose"
    );



photoItems.forEach(
    function (image) {

        image.addEventListener(
            "click",
            function () {

                lightboxImage.src =
                    image.src;


                lightboxImage.alt =
                    image.alt;


                lightbox.classList.add(
                    "active"
                );


                lightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);



/* ==========================================
   CLOSE LIGHTBOX
========================================== */

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    lightboxImage.src = "";

}



/* CLOSE BUTTON */

lightboxClose.addEventListener(
    "click",
    closeLightbox
);



/* ==========================================
   CLICK OUTSIDE IMAGE
========================================== */

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



/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains(
                "active"
            )
        ) {

            closeLightbox();

        }

    }
);



/* ==========================================
   GOOGLE DRIVE VIDEO SETTINGS
========================================== */

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