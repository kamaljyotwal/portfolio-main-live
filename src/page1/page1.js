// toggle of menu button
// function toggleclass(x) {
//     x.classList.toggle("change");
//   }
// end

// tabs actived on Nav Click
function openSection(evt, sectionname) {
    var i, x, tablinks;
    x = document.getElementsByClassName("sections");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("innerlink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" effectOnLinkclickActive", "");
    }
    document.getElementById(sectionname).style.display = "block";
    evt.currentTarget.className += " effectOnLinkclickActive";
}
// particles
particlesJS.load("particles-js", "./particlesjs-config.json", function () {
    console.log("particles loaded");
});

var particle = document.getElementById("particles-js");
var particlecontainer = document.getElementById("particle-container");

// particles toggle on Navlink click
function opacityparticleone() {
    particle.style.opacity = "1";
}
function opacityparticlezero() {
    particle.style.opacity = "0";
}
function particledisplaynone() {
    particlecontainer.style.display = "none";
}
function particledisplayshow() {
    particlecontainer.style.display = "block";
}