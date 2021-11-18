let myButton = document.getElementById('color-generator');

myButton.addEventListener('click', function(){

    let randomColor = generateRandomColor(),
        bodyTag = document.getElementById('body-tag'),
        h1tag = document.getElementById('color');

    bodyTag.style.backgroundColor = randomColor;
    h1tag.innerHTML = randomColor;

});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
   
// 2. Write a function to generate color
function generateRandomColor(){
    // rgb(0-255 0-255 0-255)
    let red, green, blue, style,
        head = 'rgb(',
        seperator = ' ',
        tail = ')';

    red = getRandomInt(0, 255);
    green = getRandomInt(0, 255);
    blue = getRandomInt(0, 255);

    //Expected output rgb(0-255 0-255 0-255) 
    style = head + red + seperator + green + seperator + blue + tail;

    return style;
}