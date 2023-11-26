// yourScript.js
const cardContainer = document.getElementById('card-container');

function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// Example usage
const card1 = createCard('Dynamic Cards 101', 'Learn how to spice up your web page with dynamic card rendering!');
const card2 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
