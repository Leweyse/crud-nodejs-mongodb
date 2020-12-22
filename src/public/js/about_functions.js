const about_first_content = document.querySelector('.about__section.first_content');
const about_second_content = document.querySelector('.about__section.second_content');
const about_third_content = document.querySelector('.about__section.third_content');
const about_fourth_content = document.querySelector('.about__section.fourth_content');

const about__bg = document.querySelector('#about__bg');

const about_content = [about_first_content, about_second_content, about_third_content, about_fourth_content];
let i = 0;

function cover(about_btn, about_btn_content) {
    about_btn.style.width = '1800px';
    about_btn.style.height = '1800px';
    about_btn.style.cursor = 'default';
    about_btn_content.style.display = 'none';
}

function hide(about_btn, about_btn_content) {
    about_btn.style.width = '90px';
    about_btn.style.height = '90px';
    setTimeout(() => {
        about_btn_content.style.display = 'block';
        about_btn.style.cursor = 'pointer';
    }, 2000);
}

function show(about_content) {
    if (i < about_content.length - 1) {
        about_content[i].style.display = 'none';
        about_content[++i].style.display = 'block';
    } else {
        about_content[0].style.display = 'block';
        about_content[about_content.length - 1].style.display = 'none';
        i = 0;
    }
}

function hold(about_btn, about_btn_content, about_content) {
    cover(about_btn, about_btn_content);
    setTimeout(() => hide(about_btn, about_btn_content), 2000);
    if (about_content[i].style.display = 'block') {
        setTimeout(() => show(about_content), 2000);
    }
}

function create_aboutBg() {
    const about__cover = document.createElement('div');
    about__cover.className = 'about__cover';
    about__bg.appendChild(about__cover);

    // about__cover :: ¿Podemos usar esta constante para otras operaciones con ese elemento: elem.style, etc.?

    const about_button_content = document.createElement('div');
    about_button_content.className = 'about__cover--arrow';
    about__cover.appendChild(about_button_content);

    const about_button_arrowTop = document.createElement('div');
    about_button_arrowTop.className = 'about__cover--arrow-top';
    about_button_content.appendChild(about_button_arrowTop);

    const about_button_arrowBottom = document.createElement('div');
    about_button_arrowBottom.className = 'about__cover--arrow-bottom';
    about_button_content.appendChild(about_button_arrowBottom);

    const about_button_array = [about__cover, about_button_content, about_button_arrowTop, about_button_arrowBottom]

    function show_aboutBg() {
        about_button_array[0].style.left = Math.floor(Math.random() * 90) + 'vw';
        about_button_array[0].style.top = Math.floor(Math.random() * 80) + 'vh';
    }

    show_aboutBg();
    setInterval(() => show_aboutBg(), 7000);

    about__cover.addEventListener('click', function() {
        hold(about__cover, about_button_content, about_content)
        about__cover.removeEventListener('click', () => hold(about__cover, about_button_content, about_content), true)
    })
};

window.onload = create_aboutBg;
