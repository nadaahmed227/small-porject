const btnEl = document.querySelector(".btn"); 
 
btnEl .addEventListener("mouseover",(Event)=>{ 



 const x=(Event.pagex- btnEl.offsetLeft); 
const y=(Event.pagey- btnEl.offsetTop);

btnEl.style.setproperty("--xpos",x+"px"); 
 
btnEl.style.setproperty("--ypos",y+"px");

})
