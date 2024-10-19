function addElemntById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add("hidden");
}
function removeElemntById(removeElementId){
    const element=document.getElementById(removeElementId);
    element.classList.remove("hidden");
}

function getTextElementValueById(elementId){
   const element=document.getElementById(elementId);
   const elementValueText=element.innerText;
   const value=parseInt(elementValueText);
   return value;
}

function setTextElementValueById(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}