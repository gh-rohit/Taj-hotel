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
        ease: "power2.out",   
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
  var allText=document.querySelectorAll(".page3-pride")
  allText.forEach(function(dets){
    var eachText= dets.childNodes[1].textContent 
    var broke=eachText.split("")
    var clutter=""
    broke.forEach(function(val){
     clutter+=`<span>${val}</span>` 
    })
    var eachText= dets.childNodes[1].innerHTML=clutter
      
    })
    gsap.from(".page3-pride h1 span",{
      y:600,
      stagger:0.1,
      duration:1,
      scrollTrigger:{
        scroller:"body",
        trigger:"#page3",
        start:"40% 70%",
        end:"10% 30%",
        markers:true,
        // scrub: true
        
      }
    
    })
 }
 page3text()
 document.addEventListener('DOMContentLoaded', function () {
            // Initialize Lenis
            const lenis = new Lenis({
                duration: 1.2, // duration of the smooth scroll
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


