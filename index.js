   
   let cursor = document.querySelector("#cursor")
   let maindiv = document.querySelector("#main")

   maindiv.addEventListener("mousemove" , (movement)=>{  

    gsap.to(cursor, {
      x:movement.x,
      y:movement.y,
    
    })

    
   })