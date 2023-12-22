const container = document.querySelector('.container');

const API_KEY = 'uuVfhEj9dgkLVwlDuWW6bAfkNJBhrGOcje15Sno5AskDIJI7sVOSbFw3';

function getRandomImage() {
    fetch('https://api.pexels.com/v1/curated?page=10&per_page=80', {
        method: 'GET',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((results) => {
        for (let i = 1; i <= 15; i++){
            const randomNum = Math.floor(Math.random() * 80);
            const img = document.createElement('img');
            img.src = results.photos[randomNum].src.medium;
            container.appendChild(img)
        }
        console.log(results.photos)
    })
    .catch((erorr) => {
        console.log(erorr);
    })
};

getRandomImage();
