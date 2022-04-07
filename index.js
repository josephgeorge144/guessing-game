nodeList=document.querySelectorAll(".fixed-nav ul a li")
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener('mouseover',mouse);
    nodeList[i].addEventListener('mouseout',mouseout)
}



function mouse(event){
   

    event.target.style.borderBottom = "thick solid rgb(260, 217, 2)";
    event.target.style.transition = "all .09s ease-in-out"


 
    




   

}
function mouseout(event){
    event.target.style.borderBottom = "none";
    event.target.style.transition = "all .4s ease-out-in"
  
}




