   var tl=gsap.timeline()
   var video= document.querySelector("#video-container")
   var whiteImg=document.querySelector("#white-img")
   var goldenImg= document.querySelector("#golden-img")
   gsap.to("#nav",{
    backgroundColor:"white",
    height:"13.5vh",
    
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        start:"top top%",
        scrub:true,
        // markers: true
    }

   },"b")


   gsap.to("#nav a",{
    
     color:"#AD8B3A",
    scrollTrigger:{
        scroller:"body",
        trigger:"#page1",
        start:"top  top",
        scrub:true,
        // markers: true
    }

   },"b")
   gsap.to("#white-img",{
    
    opacity:0,
    // duration:1,
    scale:0,
   scrollTrigger:{
       scroller:"body",
       trigger:"#page1",
       start:"top  top",
       scrub:true,
    //    markers: true
   }

  },"b")
  gsap.to("#golden-img",{
    
    opacity:1,
    duration:1,
    scale:1,
    // height:"80%",
   scrollTrigger:{
       scroller:"body",
       trigger:"#page1",
       start:"top  top",
       scrub:true,
    //    markers: true
   }

  },"b")




  tl.to("video",{
       width:"100%",
       height:"100vh",
        duration: 1,
        ease: "power5.out",   
 }) 
 tl.from("#left-nav, #right-nav ",{
    y:100,
    opacity:0,
    duration: 0.8,

 })

 tl.from("#nav #white-img ",{
    y:-100,
    opacity:0,
    duration: 1,
    color:"black"
 })



 var tl2 = gsap.timeline();

 tl2.to("#left-overlay", {
   y: -1000,
   duration: 2,
   ease: "power1.out",
   scrollTrigger: {
     scroller: "body",
     trigger: "#page2",
    //  markers: true,
     start: "top top", 
     end: "100% -10%",
     scrub: true,
     pin: true,
   }
 }, "a");
 
 tl2.to("#right-overlay", {
   y: 1000,
   duration: 2,
   ease: "power1.out",
   scrollTrigger: {
     scroller: "body",
     trigger: "#page2",
    //  markers: true,
     start: "top top", 
     end: "100% -10%",
     scrub: true,
   }
 }, "a");
 

 tl2.add("afterOverlay");
 
 tl2.from("#page2 h2", {
   opacity: 0,
   scale: 0,
   duration: 1,
   scrollTrigger: {
     scroller: "body",
     trigger: "#page2",
    //  markers: true,
     start: "top top",
     end: "100% -10%",
     scrub: true,
   }
 }, "afterOverlay");
 


 function page3text(){
  // var allText=document.querySelectorAll(".page3-pride")
  // allText.forEach(function(dets){
  //   var eachText= dets.childNodes[1].textContent 
  //   var broke=eachText.split("")
  //   var clutter=""
  //   broke.forEach(function(val){
  //    clutter+=`<span>${val}</span>` 
  //   })
  //   var eachText= dets.childNodes[1].innerHTML=clutter
      
    // })
    gsap.from(".page3-pride h1 ",{
      y:150,
      stagger:0.1,
      duration:2,
      scrollTrigger:{
        scroller:"body",
        trigger:"#page3",
        start:"25% 70%",
        end:"10% 0%",
        markers:true,
        scrub: true
        
      }
    
    })
 }
 page3text()
 document.addEventListener('DOMContentLoaded', function () {
            // Initialize Lenis
            const lenis = new Lenis({
                duration: 0.5, // duration of the smooth scroll
                easing: (t) => t, // linear easing function (default)
                direction: 'vertical', // vertical scrolling (default)
                smooth: true // enable smooth scrolling
            });

            // Start the Lenis smooth scroll animation loop
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
       
          
        });
        
  let lastScrollY = window.scrollY;
const navbar = document.querySelector('#nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

//  span tag of h1
var roomTextElements = document.querySelectorAll('#room-text h1');

roomTextElements.forEach(function(elem) {
    var split = elem.textContent.split("");
    var clutter = "";
    
    split.forEach(function(char) {
        clutter += `<span>${char}</span>`;
    });
    
    elem.innerHTML = clutter;
   
});
var tl3=gsap.timeline()
tl3.to("#room-text h1 span",{
  // y:-50,
  // opacity:1,

color:"#AD8B3A",
stagger:0.3,
duration:2,
onStart: () => {
  console.log("ji")
},
scrollTrigger:{
   trigger:"#page4",
   scroller:"body",
  //  markers:true,
   start:"-5% 50%",
   end:"20% 34%",
  //  pin: true,
   scrub:2
}
})

tl3.from("#food-text",{
  y:100,
  stagger:0.3,
  opacity:0,
  scrollTrigger:{
    trigger:"#food-div",
    scroller:"body",
   //  markers:true,
    start:"-5% 50%",
    end:"20% 34%",
   //  pin: true,
    scrub:2
 }

},"food")
tl3.from("#first-food-img",{
  y:100,
  stagger:0.3,
  opacity:0,
  scrollTrigger:{
    trigger:"#food-div",
    scroller:"body",
   //  markers:true,
    start:"-5% 50%",
    end:"20% 34%",
   //  pin: true,
    scrub:2
 }

},"food")
tl3.from("#second-food-img",{
  y:100,
  stagger:0.3,
  opacity:0,
  scrollTrigger:{
    trigger:"#food-div",
    scroller:"body",
    // markers:true,
    start:"18% 50%",
    end:"20% 34%",
   //  pin: true,
    scrub:2
 }

})
tl3.from("#explore-foods",{
  y:100,
  stagger:0.3,
  opacity:0,
  scrollTrigger:{
    trigger:"#food-div",
    scroller:"body",
    // markers:true,
    start:"25% 50%",
    end:"20% 34%",
   //  pin: true,
    scrub:2
 }

})
tl3.from("#third-food-img",{
  y:100,
  stagger:0.3,
  opacity:0,
  scrollTrigger:{
    trigger:"#food-div",
    scroller:"body",
   //  markers:true,
    start:"32% 50%",
    end:"20% 34%",
   //  pin: true,
    scrub:2
 }

})

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const containers = document.querySelectorAll(".food-items");

  containers.forEach(container => {
    const image = container.querySelector("img");
    const text = container.querySelector(".food-items-text h3");
    const text2=container.querySelector(".text-with-icon p")

    gsap.fromTo(container, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      scrollTrigger: {
        trigger: container,
        start: "top 80%", // start animation when container is 80% from the top of the viewport
        end: "bottom 60%", // end animation when container is 20% from the bottom of the viewport
        scrub: 1,
        // markers:true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });

    container.addEventListener("mouseenter", () => {
      gsap.to(image, { duration: 0.5, x: 300 }); // Move image into view
      gsap.to(text, { duration: 0.5, x: 300 }); 
      gsap.to(text2, { duration: 0.5, x: 300 }); 
      gsap.to(text,{color:"  #fff  "}) 
      gsap.to(text2,{color:"#fff"})
      gsap.to(container,{backgroundColor:"#D4B467"})// Move text to the right
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(image, { duration: 0.5, x: -300 }); // Move image out of view
      gsap.to(text, { duration: 0.5, x: 0 }); 
      gsap.to(text2, { duration: 0.5, x: 0 }); 
      gsap.to(text,{color:"#AD8B3A"}) 
      gsap.to(text2,{color:"#AD8B3A"})
      gsap.to(container,{backgroundColor:"#fff"})  // Move text back to its original position
    });
  });
});


