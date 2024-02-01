

const counter=document.getElementById("text");
const addButton=document.getElementById("btn1");
const resetButton=document.getElementById("btn2");
const minusButton=document.getElementById("btn3");

 var count=0;

addButton.addEventListener('click',()=>{
    count+=1;
    counter.innerHTML=count;
});

resetButton.addEventListener('click',()=>{
    counter.innerHTML=0;
});

minusButton.addEventListener('click',()=>{
count-=1;

counter.innerHTML=count;

});