//The method that we can use to repeatedly check our page to see if elements are visible
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}


let elToShow = document.querySelectorAll('.play-on-scroll')

isElementInViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElementInViewPort(item)) {
            item.classList.add('start');
        } else {
            item.classList.remove('start');
        }
    })

    scroll(loop);
}

loop();