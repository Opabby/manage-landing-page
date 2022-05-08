let cardIndex = 1;
showCards(cardIndex);

function plusCards(n) {
    showCards(cardIndex += n);
}

function currentCard(n) {
    showCards(cardIndex = n);
}

function showCards(n) {
    let i;
    let cards = document.getElementsByClassName("statement__card");
    let dots = document.getElementsByClassName("dot");
    if (n > cards.length) {cardIndex = 1};
    if (n < 1) {cardIndex = cards.length};
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    cards[cardIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}