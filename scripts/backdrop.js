
var backdrop = document.querySelector(".backdrop");
var ham= document.querySelector(".hamburger");
var content = document.querySelector(".backdrop-menu");
ham.addEventListener('click',()=>{
    ham.classList.toggle("change");
       backdrop.classList.toggle("toggle")
      content.classList.toggle("hide");
   
})
backdrop.addEventListener('click',()=>{
    ham.classList.toggle("change");
    backdrop.classList.toggle("toggle");    
     content.classList.toggle("hide");
   
})


