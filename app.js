let result=document.querySelector(".result-div");
let para=document.querySelector(".para");
let clear=document.querySelector(".row-1-c");
let deleteone=document.querySelector(".row-1-cross");
let divide=document.querySelector(".row-1-divide");
let multiply=document.querySelector(".row-1-multiply");

let seven=document.querySelector(".row-2-7");
let eight=document.querySelector(".row-2-8");
let nine=document.querySelector(".row-2-9");
let minus=document.querySelector(".row-2-minus");

let four=document.querySelector(".row-3-4");
let five=document.querySelector(".row-3-5");
let six=document.querySelector(".row-3-6");
let plus=document.querySelector(".row-3-plus");

let one=document.querySelector(".row-4-1");
let two=document.querySelector(".row-4-2");
let three=document.querySelector(".row-4-3");
let modulo=document.querySelector(".row-4-modulo");

let zero=document.querySelector(".row-5-0");
let dot=document.querySelector(".row-5-dot");
let equal=document.querySelector(".row-5-equal");


let displayValue="";


nine.addEventListener("click",function(){
    
    displayValue=displayValue+9;
    para.innerText=displayValue;
})

eight.addEventListener("click",function(){
    
    displayValue=displayValue+8;
    para.innerText=displayValue;
})

seven.addEventListener("click",function(){
    
    displayValue=displayValue+7;
    para.innerText=displayValue;
})

six.addEventListener("click",function(){
   
    displayValue=displayValue+6;
    para.innerText=displayValue;
})

five.addEventListener("click",function(){
   
    displayValue=displayValue+5;
    para.innerText=displayValue;
})

four.addEventListener("click",function(){
   
    displayValue=displayValue+4;
    para.innerText=displayValue;
})

three.addEventListener("click",function(){
   
    displayValue=displayValue+3;
    para.innerText=displayValue;
})

two.addEventListener("click",function(){
    
    displayValue=displayValue+2;
    para.innerText=displayValue;
})

one.addEventListener("click",function(){
   
   displayValue=displayValue+1;
   para.innerText=displayValue;
})

zero.addEventListener("click",function(){
   
    displayValue=displayValue+0;
    para.innerText=displayValue;
})

plus.addEventListener("click",function(){
   
    displayValue=displayValue+'+';
    para.innerText=displayValue;
   

})

minus.addEventListener("click",function(){
   
    displayValue=displayValue+'-';
    para.innerText=displayValue;
   
})

multiply.addEventListener("click",function(){
   
    displayValue=displayValue+'*';
    para.innerText=displayValue;
   
})

divide.addEventListener("click",function(){
    
    displayValue=displayValue+'/';
    para.innerText=displayValue;
   
})

modulo.addEventListener("click",function(){
    displayValue=displayValue+'%';
    para.innerText=displayValue;
})


equal.addEventListener("click",function(){
    
   para.innerText = eval(displayValue);
 
})



clear.addEventListener("click",function(){
     displayValue="";
     para.innerText=displayValue;
})


let cross=document.querySelector(".row-1-cross");
cross.addEventListener("click",function(){
     let lastocc=displayValue.charAt(displayValue.length);
     let teststr1=strtoint.slice(0,strtoint.length-1);
     strtoint=teststr1;

     let teststr2= displayValue.slice(0,displayValue.length-1);
     displayValue= teststr2;
     
      para.innerText=displayValue;
   
      
 })