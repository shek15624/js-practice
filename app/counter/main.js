let token = 0;
let myButtonElement = document.getElementById("counter");
let displayElement1 = document.getElementById("display");
myButtonElement.addEventListener('click',function(){
    token = token + 1;
    displayElement1.innerHTML = token;
});