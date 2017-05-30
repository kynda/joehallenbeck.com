window.onload = function() {
    var pick = Math.floor((Math.random() * 6) + 1);
    var header = document.getElementById("header-image");
    header.style.backgroundImage = "url('/images/template/headers/background-"+pick+".jpg')";
};
