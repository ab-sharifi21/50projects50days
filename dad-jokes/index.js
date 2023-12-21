const button = document.querySelector('.btn');
const jokeP = document.querySelector('.joke');

button.addEventListener('click', getJoke);


async function getJoke () {
        const config = {
            headers: {
              Accept: 'application/json',
            }
        }

        const response = await fetch('https://icanhazdadjoke.com', config);
        const jokes = await response.json();

        jokeP.innerHTML = jokes.joke;
};

getJoke();

