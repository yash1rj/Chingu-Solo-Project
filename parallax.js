var parallax = document.querySelector(".parallax-bg-image");

window.addEventListener("scroll", function () {

    var scrolledHeight = window.pageYOffset,
        limit = parallax.offsetTop + parallax.offsetHeight;

    if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
        console.log("hi");
        parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 1.5 + "px";

    } else {
        console.log("hello");
        parallax.style.backgroundPositionY = "0";
    }
});