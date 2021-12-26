const cards = document.querySelectorAll('.cards__item');


async function handleButtonClick() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');
    const data = await response.json();
    cards.forEach((card, index) => {
        card.querySelector('.cards__image').src = data[index].url;
        card.querySelector('.cards__title').textContent = data[index].title;
    });
}

const button_load_img = document.querySelector('.cards__button_load');
button_load_img.addEventListener('click', handleButtonClick);

