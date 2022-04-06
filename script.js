const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress');

let currentActive = 1

next.addEventListener('click',() => {
   currentActive++;
   if(currentActive > circles.length){
      currentActive = circles.length
   }
   // console.log(currentActive)
   update()
   
});

prev.addEventListener('click',() => {
   currentActive--;
   if(currentActive < 1){
      currentActive = 1
   }
   update()
   // console.log(currentActive)
});

function update(){
   
   circles.forEach((element , index)=>{
      if(index < currentActive){
         element.classList.add('active')
      }else{
         element.classList.remove('active')
      }
   })
   const activeCircle = document.querySelectorAll('.active')
   // console.log(activeCircle.length, circles.length)

   progress.style.width = (activeCircle.length-1)/(circles.length-1)*100+'%'

   if(currentActive === 1){
      prev.disabled = true
   }
   else if(currentActive === circles.length){
      next.disabled = true
   }
   else{
      prev.disabled = false
      next.disabled = false
   }
}


