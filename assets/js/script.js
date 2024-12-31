// nav bar 
// menu


$(document).ready(function () {
    $(".categories-main").click(function () {
        $(".categories-content").slideToggle();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.categories-content li');

    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent bubbling up

            // Collapse all categories except the clicked one
            categories.forEach(item => {
                if (item !== category) {
                    item.classList.remove('dropdown-active');
                }
            });

            // Toggle the clicked category
            category.classList.toggle('dropdown-active');
        });
    });
});




$(document).ready(function () {
    $(".new-arrivals-main").click(function () {
        $(".new-arrivals-content").slideToggle();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.new-arrivalsy-content li');

    categories.forEach(category => {
        category.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent bubbling up

            // Collapse all categories except the clicked one
            categories.forEach(item => {
                if (item !== category) {
                    item.classList.remove('dropdown-active');
                }
            });

            // Toggle the clicked category
            category.classList.toggle('dropdown-active');
        });
    });
});


// cart icon
// cart
$(document).ready(function () {
    $("#cart-icon").click(function () {
        $(".shopping-cart-main").addClass("shopping-cart-main");
        return false;
    });
});
$(document).ready(function () {
    $("#close-cart-icon").click(function () {
        $(".shopping-cart-main").removeClass("shopping-cart-main-transform");

    });
});
// cart
// cart icon


// user login
$(document).ready(function () {
    $("#user-icon").click(function () {
        $(".form-main").addClass("form-main-transform");
        return false;
    });
    $("#user-close-icon").click(function () {
        $(".form-main").removeClass("form-main-transform");
    });
});
// user login


// gsap
let tl = gsap.timeline()

tl.from(".nav-links-main ul li", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3,
});

function adjustBannerBackgroundPosition() {
    const bannerBg = document.querySelector('.banner-right-bg');
    if (bannerBg) {
        bannerBg.style.backgroundPosition = 'center center'; // Explicit centering
    }
}

// Ensure this runs on load
window.addEventListener('load', adjustBannerBackgroundPosition);
