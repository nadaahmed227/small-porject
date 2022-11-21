const btnEl = document.querySelector(".btn"); //const: In order to return an item to that, we wrote the btn

 
btnEl .addEventListener("mouseover",(Event)=>{ 
//we have addEventListene And the event is the mouse 


 console.logx=(Event.pagex- btnEl.offsetLeft); //  const save value y  to subtract this  Event.pagex from  btnEl.offsetLeft
const y=(Event.pagey- btnEl.offsetTop);//  const save value y to subtract this Event.pagey from  btnEl.offsetTop 

btnEl.style.setproperty("--xpos",x+"px"); //We change the specified property is var(--xpos)
 
btnEl.style.setproperty("--ypos",y+"px");//We change the specified property is var(--ypos);

})
