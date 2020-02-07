// Carrousel galerie d'images   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto

var imageIndex = 0;

function Start_carrousel() {
    var i;
    var images = document.getElementsByClassName("mesImages");

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    imageIndex++;
    if (imageIndex > images.length) { imageIndex = 1 }
    images[imageIndex - 1].style.display = "block";
    setTimeout(Start_carrousel, 3000); // Durée
}