var main= document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var over=document.querySelector("#overlay")

main.addEventListener("mousemove",(dets)=>{
  console.log(dets.x,dets.y),
  gsap.to("#cursor",{
   left:dets.x,
   top:dets.y,
   duration:1,
   ease:"back.out"
  })
})

over.addEventListener("mouseenter",()=>{
   cursor.innerHTML="View More"
   gsap.to(cursor,{
      scale:4,
      backgroundColor:"#ffffff7a"
   })
})
over.addEventListener("mouseleave",()=>{
   cursor.innerHTML=""
   gsap.to(cursor,{
      backgroundColor:"#fff",
      scale:1
   })
   
})
over.addEventListener("click",()=>{
   gsap.to("#img img",{
      attr:{src:"https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      duration:0.1
   })
})