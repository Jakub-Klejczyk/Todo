const addButton = document.getElementById("add-button");
gsap.from(".title", {
  duration: 1,
  ease: "back",
  y: "100%",
});

const anim = gsap.from(".div-element", {
  duration: 1,
  ease: "bounce.out",
  x: "-100%",
});

addButton.addEventListener("click", () => {
  anim.play();
});
