import  {videos}  from './data.js';
import { menu } from './data.js';


document.addEventListener('DOMContentLoaded', () => {
    const playlist = document.getElementById('playlist');
    console.log('estou aqui')

    videos.forEach(video => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.classList.add('suggestion');

        suggestionDiv.innerHTML = `
            <div class="video">
                <img src="${video.thumb}" alt="${video.alt}">
            </div>
            <div class="video-informations">
                <div>
                    <img src="${video.avatar}" alt="DIO logo">
                </div>
                <div>
                    <h2>${video.title}</h2>
                    <span>${video.views}<br>${video.time}</span>
                </div>
            </div>
        `;

        playlist.appendChild(suggestionDiv);
    });

    const sidebar = document.getElementById('sidebar');

    menu.forEach(item => {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu');

        menuDiv.innerHTML = `
            <img class='icon' src="${item.src}" alt="${item.alt}">
            <p>${item.title}</p>
        `;

        sidebar.appendChild(menuDiv);
    });
});

