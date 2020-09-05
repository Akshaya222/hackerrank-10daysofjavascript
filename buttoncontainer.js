let nums=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.getElementById("btn5");

btn5.onclick=function() {
    nums.unshift(nums.pop());
    for (i=0; i<=7; i++) {
        document.getElementById("btn"+ids[i]).innerHTML=nums[i];
    }
}
/*
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

function clockwiseRotation() {
    [btn1.innerHTML,
     btn2.innerHTML,
     btn3.innerHTML,
     btn4.innerHTML,
     btn6.innerHTML,
     btn7.innerHTML,
     btn8.innerHTML,
     btn9.innerHTML] =
        [btn4.innerHTML,
         btn1.innerHTML,
         btn2.innerHTML,
         btn7.innerHTML,
         btn3.innerHTML,
         btn8.innerHTML,
         btn9.innerHTML,
         btn6.innerHTML]
}

btn5.addEventListener("click", clockwiseRotation);*/
