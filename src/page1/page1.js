function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("sections");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("innerlink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" backgroundRed", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " backgroundRed";
}
