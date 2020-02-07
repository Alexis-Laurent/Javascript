// Pop-up consentement cookies

var cookie_titre = "Cookies";
var cookie_description = "En utilisant ce site Web, vous acceptez que nous utilisions des cookies pour vous garantir une meilleure exp\351rience.";
var cookie_lien = '<a href="/Home/Informations_legales">Pourquoi ?</a>';
var cookie_bouton = "OK";

// Transition de début
function Transition_debut(elem, display) {
    var el = document.getElementById(elem);
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function Estomper() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .04) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(Estomper);
        }
    })();
};

// Transition de fin
function Transition_fin(elem) {
    var el = document.getElementById(elem);
    el.style.opacity = 1;

    (function Estomper() {
        if ((el.style.opacity -= .04) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(Estomper);
        }
    })();
};

// Paramètre du cookie
function Parametre_cookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Vérification si cookie existe
function Verif_cookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function Affichage_pop_up() {
    if (!Verif_cookie('ElFouad_accept')) {
        document.body.innerHTML += '<div class="cookie_container" id="cookie_container"><div class="cookie_titre"><a>' + cookie_titre + '</a></div><div class="cookie_description"><p>' + cookie_description + ' ' + cookie_lien + '</p></div><div class="cookie_bouton"><a onClick="Creation_cookie();">' + cookie_bouton + '</a></div></div>';
        Transition_debut("cookie_container");
    }
}

function Creation_cookie() {
    Parametre_cookie('ElFouad_accept', 'Acceptation des cookies', 365);  // Date d'expiration
    Transition_fin("cookie_container");
}

// Affichage de la fenêtre
window.onload = function () {
    Affichage_pop_up();
};