var loader = document.getElementById('loader');

window.addEventListener("load", function () {
    loader.classList.add("loaded");
    setTimeout(function() {
        loader.remove();
    },2000); /* 2000 for demo purposes */
});
