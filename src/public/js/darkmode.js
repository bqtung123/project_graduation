let root = document.querySelector(':root');
let darkElement = document.getElementById('dark');
let lightElement = document.getElementById('light');
let statusDarkMode = localStorage.getItem('dark');
if (statusDarkMode === null) localStorage.setItem('dark', 'false');
if (statusDarkMode === 'false') {
    if (darkElement !== null && lightElement !== null) {
        darkElement.setAttribute('hiddenicon', 'true');
        lightElement.setAttribute('hiddenicon', 'false');
    }
} else {
    if (darkElement != null && lightElement !== null) {
        darkElement.setAttribute('hiddenicon', 'false');
        lightElement.setAttribute('hiddenicon', 'true');
    }

    root.style.setProperty('--background-color', 'black');
    root.style.setProperty('--text-color', '#FFFFFF');
    root.style.setProperty('color', '#FFFFFF');
    root.style.setProperty('--border-none', 'var(--border)');
    root.style.setProperty('--background-color-item', 'black');
    root.style.setProperty('--title-color', '#FFFFFF');
}
console.log(statusDarkMode);
const toggleDarkModeStatus = (event) => {
    let toggleButton = event.path[0];
    console.log(toggleButton.getAttribute('status'));
    if (toggleButton.getAttribute('status') === 'light') {
        lightElement.setAttribute('hiddenicon', 'true');
        darkElement.setAttribute('hiddenicon', 'false');
        localStorage.setItem('dark', true);
    } else {
        darkElement.setAttribute('hiddenicon', 'true');
        lightElement.setAttribute('hiddenicon', 'false');
        localStorage.setItem('dark', false);
    }
    if (localStorage.getItem('dark') === 'true') {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--text-color', '#FFFFFF');
        root.style.setProperty('color', '#FFFFFF');
        root.style.setProperty('--border-none', 'var(--border)');
        root.style.setProperty('--background-color-item', 'black');
        root.style.setProperty('--title-color', '#FFFFFF');
    } else {
        root.style.setProperty('--background-color', '#f5f7f8');
        root.style.setProperty('--text-color', 'hsl(var(--hue), 8%, 35%)');
        root.style.setProperty('color', 'hsl(var(--hue), 8%, 35%)');
        root.style.setProperty('--border-none', '1px solid rgb(221, 221, 221)');
        root.style.setProperty('--background-color-item', '#FFF');
        root.style.setProperty('--title-color', 'hsl(var(--hue), 12%, 15%)');
    }
};
