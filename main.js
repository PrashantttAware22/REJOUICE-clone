function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locoScroll();


function SheryJS() {
    // Shery.mouseFollower();

    Shery.makeMagnet(".magnet");
}

SheryJS();

function cursorEffect() {
    let page1Content = document.querySelector(".page1-Content");
    let cursor = document.querySelector("#mouseCursor");

    page1Content.addEventListener("mousemove", function (dets) {
        cursor.style.left = dets.x + "px";
        cursor.style.top = dets.y + "px";
    });

    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    });

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}

cursorEffect();

function page2Animation() {    
    gsap.from(".page2-MainHeading h1", {
        y: 100,
        stagger: 0.2,
        duration: .8,
        scrollTrigger: {
            trigger: ".page2",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }

    });
}

page2Animation();


function page4Animation() {
    gsap.from(".page4-MainHeading h1", {
        y: 100,
        stagger: 0.2,
        duration: .8,
        scrollTrigger: {
            trigger: ".page4",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }

    });

}

page4Animation();


function page5Effects() {
    const page5 = document.querySelector(".page5");
    const cursor5 = document.querySelector("#mouseCursor5");

    // show cursor
    page5.addEventListener("mouseenter", () => {
        cursor5.style.opacity = "1";
        cursor5.style.transform = "translate(-50%, -50%) scale(1)";
    });

    // hide cursor
    page5.addEventListener("mouseleave", () => {
        cursor5.style.opacity = "0";
        cursor5.style.transform = "translate(-50%, -50%) scale(0)";
    });

    // move cursor with mouse
    page5.addEventListener("mousemove", (e) => {
        const rect = page5.getBoundingClientRect();

        cursor5.style.left = (e.clientX - rect.left) + "px";
        cursor5.style.top = (e.clientY - rect.top) + "px";
    });

}

page5Effects();


function page6Animation() {
    gsap.from(".page6-MainHeading h1", {
        y: 100,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: ".page6",
            scroller: ".main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }

    });
}

page6Animation();


function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 600,
            disableOnInteraction: false,
        },
    });
}
sliderAnimation();


function loader() {
    var tl = gsap.timeline()
    tl.from(".loader span", {
        x: 100,
        duration: 1.2,
        stagger: .03,
        delay: .1
    })
    tl.to(".loader span", {
        x: -100,
        duration: .6,
        opacity: 0,
        stagger: .03
    })
    tl.to('.loader', {
        duration: .5,
        opacity: 0,
        display: "none"
    })
    tl.from('.page1 .inner-content h1 span', {
        y: 60,
        duration: .5,
        delay: -.3,
        stagger: .05
    })
}

loader(); 
