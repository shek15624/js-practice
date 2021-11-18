/* write click event for each a-tag - done
    et class name of this elementg - done
    hide all cards - done
    show cards with specific class name*/

let filterLinks = document.querySelectorAll('.filter-link');

function hideAllcards(){
    let cards = document.querySelectorAll('.card');
    cards.forEach(function(card){
        card.style.display = 'none';
    });
}
function showCards(cardType){
    console.log(cardType);
    cardType = '.'+cardType;
    console.log(cardType);
    let cardAll = document.querySelectorAll(cardType);
    console.log(cardAll);
    cardAll.forEach(function(card){
        card.style.display = 'block';
    });
}
function printMe(filterLink){
    filterLink.addEventListener('click', function(){
        // get class name of this element
        let currentElement = this,
            filterType = currentElement.classList[1];
        //hide all cards
        hideAllcards();
        showCards(filterType);
    })
    
}
// write click event for each a-tag
filterLinks.forEach(printMe);
