'use strict';
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let div = document.getElementsByClassName('carousel__item');

let l = 0;
let style_left = 310;
// if (window.innerWidth <= 767) style_left = 290;
let lmax = 2480 / style_left;
next.onclick = () => {
    l++;
    for (let i of div) {
        if (l <= 11) i.style.left = -1 * l * style_left + 'px';
        else l = 11;
    }
};
previous.onclick = () => {
    l--;
    for (let i of div) {
        if (l >= 0) i.style.left = -1 * l * style_left + 'px';
        else l = 0;
    }
};

// const showMenu = (toggleId, navId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         })
//     }
// }

// showMenu('nav-toggle','nav-menu')
let id = null;
const openFAQ = (event) => {
    let buttonNode = event.path[1];
    if (event.path[1].tagName === 'LI') buttonNode = event.path[0];
    let liNode = buttonNode.parentNode;
    let detailNode = buttonNode.nextElementSibling;
    let icon = buttonNode.firstChild;
    if (detailNode.getAttribute('hiddenicon') == 'true') {
        detailNode.setAttribute('hiddenicon', false);
        icon.style.transform = 'rotate(90deg)';
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 15);
        function frame() {
            if (pos == 100) {
                clearInterval(id);
            } else {
                pos += 2;
                detailNode.style.width = pos + '%';
            }
        }
    } else {
        detailNode.setAttribute('hiddenicon', true);
        icon.style.transform = 'rotate(0deg)';
    }
};
