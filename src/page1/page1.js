// toggle of menu button
// function toggleclass(x) {
//     x.classList.toggle("change");
//   }
// end

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

// jquery
