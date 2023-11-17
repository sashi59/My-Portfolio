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

function navItemsScrollAnimation(){ 
var target = document.querySelectorAll(".main .nav .nav2 a")
gsap.to(".nav .nav1 img",{
    y:15,
    opacity: 1,
    delay:0.2,
})
gsap.to(target, {
    y:15,
    stagger:0.25,
    opacity:1,
    delay:0.4,
})
gsap.to("#home .myinfo",{
    y:50,
    stagger: 1,
    delay:1.5,
    opacity: 1,
})
}
navItemsScrollAnimation

var content1 = document.querySelector(".about-mydets #content1")
var content2 = document.querySelector(".about-mydets #content2")
var content3 = document.querySelector(".about-mydets #content3")
var btn1 = document.querySelector(".content-links #btn1")
var btn2 = document.querySelector(".content-links #btn2")
var btn3 = document.querySelector(".content-links #btn3")

function openTab1(){
    content1.style.transform = "translate(0)";
    content2.style.transform = "translate(65vw)";
    content3.style.transform = "translate(65vw)";
    btn1.style.color = "#ff004f"
    btn2.style.color = "#fff"
    btn3.style.color = "#fff"


}
function openTab2(){
    content1.style.transform = "translate(65vw)";
    content2.style.transform = "translate(0)";
    content3.style.transform = "translate(65vw)";
    btn1.style.color = "#fff"
    btn2.style.color = "#ff004f"
    btn3.style.color = "#fff"

}
function openTab3(){
    content1.style.transform = "translate(65vw)";
    content2.style.transform = "translate(65vw";
    content3.style.transform = "translate(0)";
    btn1.style.color = "#fff"
    btn2.style.color = "#fff"
    btn3.style.color = "#ff004f"

}

