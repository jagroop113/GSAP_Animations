var tl=gsap.timeline()
var cross=document.querySelector("#cross")
var menu=document.querySelector("#menu")



tl.to("#full",{
   right:0,
   duration:0.4
})
tl.from("#full h4",{
   x:150,
   stagger:0.2,
   opacity:0,
   duration:0.5
})
tl.from("#full i",{
   x:150,
   stagger:0.3,
   opacity:0,
   duration:0.5
})
tl.pause()

menu.addEventListener("click",()=>{
   tl.play()
})
cross.addEventListener("click",()=>{
   tl.reverse()
})