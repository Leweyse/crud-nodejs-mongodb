const home__bg = document.querySelector('#home__bg');
const home__count = 5;

window.onload = create_homeBg;

function create_homeBg() {
    for (let i = 0; i < home__count; i++) {
        const home__gooeyBox = document.createElement('div');
    		home__gooeyBox.className = 'home__bg--box';
    		home__bg.appendChild(home__gooeyBox);
    }

    function show_homeBg() {
        const home__gooey = document.querySelectorAll('.home__bg--box');
        for (let i = 0; i < home__gooey.length; i++) {
            home__gooey[i].style.left = Math.floor(Math.random() * 90) + 'vw';
            home__gooey[i].style.top = Math.floor(Math.random() * 80) + 'vh';
        }
    }

    show_homeBg();
    setInterval(() => show_homeBg(), 2200);
};
