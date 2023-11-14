function cursorAnimation() {
    var crsr = document.querySelector(".cursor")
    var navi = document.querySelector(".main .nav")
    document.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            top: dets.y,
            left: dets.x,
            opacity: 1,
        })
    })
}
cursorAnimation()

function navAnimation() {
    gsap.to(".main .nav", {
        backgroundColor: "#000",
        duration: 0.5,
        height: "80px",
        scrollTrigger: {
            trigger: ".main .nav",
            scroller: "body",
            //   markers:true,
            start: "top -11%",
            end: "top -11%",
            scrub: 3,
        },
    });
}  
navAnimation()

var navBar = document.querySelector(".main .nav1")
var navBarimg = document.querySelector(".main .nav1 img")

navBar.addEventListener("mousemove", function(){
    gsap.from(navBarimg, {
    y:-100,
    stagger:0.5,
})
})