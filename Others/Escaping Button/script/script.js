let randomJokes = ['Try again!!!', 'Looser!!!', 'Never give up!!!', 'I believe in you', 'Ha-ha-ha',
    'Go home', 'Call your mom!!!!', 'LoL!', 'You are so slow!!', 'You are weak!!!', 'Useless!!!'];

let [body] = document.getElementsByTagName("body");
let [btn] = document.getElementsByClassName("btn");
let [head] = document.getElementsByTagName("h1");



btn.onmouseover = () => {

    let randomPositionX = parseInt(Math.random() * (1700 - 150) + 150);
    let randomPositionY = parseInt(Math.random() * (800 - 150) + 150);

    btn.style.left = `${randomPositionX}px`;
    btn.style.top = `${randomPositionY}px`;

    let randomArrIndex = parseInt(Math.random() * (randomJokes.length - 1));
    head.innerText = `${randomJokes[randomArrIndex]}`

};

