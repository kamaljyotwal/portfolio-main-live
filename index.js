// Adding the tada effect to button with anime.js
var animation = anime({
  targets: ".secondpillbutton",
  loop: true,
  easing: "linear",
  duration: 2000,
  delay: 800,
  endDelay: 2600,
  keyframes: [
    { scale: 1, rotate: 0 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1, rotate: 0 },
    { scale: 1, rotate: 0 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1.1, rotate: -3 },
    { scale: 1.1, rotate: 3 },
    { scale: 1, rotate: 0 },
  ],
});

document.querySelector(".secondpillbutton").onmouseover = animation.pause;
document.querySelector(".secondpillbutton").onmouseleave = animation.play;
// tada end
