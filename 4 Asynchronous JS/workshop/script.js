// Задание

// https://api.nasa.gov/

// mykey
// 8CYh56Od6kmBRHfwaihG97zf7IT6AghMJ7Raf7kC

// Сделать вывод 10 карточек с описанием

// https://developer.mozilla.org/ru/docs/Web/HTML/Element/figure
// пример HTML и CSS

const url = 'https://api.nasa.gov/planetary/apod?api_key=8CYh56Od6kmBRHfwaihG97zf7IT6AghMJ7Raf7kC&count=10';

const body = document.querySelector('body');

const getData = async (url) => {
    const res = await fetch (url);
    const json = await res.json();
    return json;
}

try {
    const data = await getData(url);
    console.log(data);
    data.forEach(element => {
        body.insertAdjacentHTML('beforeend', `
        <figure class = 'figure'>
            <img class = 'image' src='${element.url}' alt='photo of galaxy' />
            <figcaption>'${element.explanation}'</figcaption>
        </figure>
        `)
    });
} catch (error) {
    console.log.error('Что-то пошло не так');
}