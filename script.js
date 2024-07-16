var initialPath=`M 0 100 Q 500 100 1000 100`

var finalPath=`M 0 100 Q 500 100 1000 100`

var string =document.querySelector("#main")

string.addEventListener("mousemove",(dets)=>{
   initialPath=`M 0 100 Q ${dets.x} ${dets.y} 1000 100`
   gsap.to("svg path",{
    attr:{d:initialPath},
    duration:0.1,
    ease:"power3.out"
   })
})

string.addEventListener("mouseleave",()=>{
  gsap.to("svg path",{
    attr:{d:finalPath},
    duration:1.5,
    ease:"elastic.out(1,0.2)"
   })
})