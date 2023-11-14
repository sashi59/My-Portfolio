var crsr = document.querySelector(".cursor")
var navi = document.querySelector(".main .nav")


function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            top: dets.y,
            left: dets.x,
            opacity: 1,
        })
    })
}
cursorAnimation()


gsap.to(".main .nav", {
    backgroundColor: "#fff",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: ".main .nav",
      scroller: "body",
      markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
