window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("navbar-scroll");
    } else {
        document.getElementById("navbar").classList.remove("navbar-scroll");
    }
};