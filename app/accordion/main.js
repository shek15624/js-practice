// Create event listner for all buttons 
let buttons = document.querySelectorAll('.question-btn');

function hideAllQuestionText(){
    let questionTexts= document.querySelectorAll('.question-text');
    questionTexts.forEach(function(questionText){
        questionText.style.display = 'none';
    });
}

function printMe(button){
    button.addEventListener('click', function(){
       let currentElement = this,
        questionWrapperElement = currentElement.parentNode.parentNode,
        questionTextElement = questionWrapperElement.querySelector('.question-text');

        
       console.log(questionTextElement);

       // hide all question-text
       hideAllQuestionText();

       questionTextElement.style.display = 'block';
    });
}
buttons.forEach(printMe); 