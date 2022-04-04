const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".title", {
  ease: "back",
  y: "100%",
});
tl.from("#form", { ease: "power2", opacity: 0, x: "-400%" });
tl.from("#add-button", { ease: "power2", opacity: 0, x: "400%" }, "<");
