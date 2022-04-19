let dark = localStorage.getItem('dark');

if (dark == 'true') {
    let root = document.querySelector(':root');
    root.style.setProperty('--background-color', 'black');
    root.style.setProperty('--text-color', '#FFFFFF');
    root.style.setProperty('color', '#FFFFFF');
    root.style.setProperty('--border-none', 'var(--border)');
    root.style.setProperty('--background-color-item', 'black');
    root.style.setProperty('--title-color', '#FFFFFF');
}

function openTab(event, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content');

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tab-links');
    console.log(pageName);
    for (i = 0; i < tablinks.length; i++) {
        if (pageName === tablinks[i].value) {
            tablinks[i].style.backgroundColor = 'var(--danger -color)';
            tablinks[i].classList.add('active');
        } else {
            tablinks[i].style.backgroundColor = 'var(--primary-color-btn)';
        }
    }
    document.getElementById(pageName).style.display = 'block';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

function hideTranscript() {
    let innerText = document.getElementById('hide-transcript').innerHTML;
    if (innerText == 'Hide Transcript') {
        document.getElementById('transcript__content').classList.add('hidden');
        document.getElementById('transcript__content').classList.remove('show');
        document.getElementById('hide-transcript').innerHTML = 'Show Transcript';
    } else {
        document.getElementById('transcript__content').classList.remove('hidden');
        document.getElementById('transcript__content').classList.add('show');
        document.getElementById('hide-transcript').innerHTML = 'Hide Transcript';
    }
}
document.getElementById('hide-transcript').addEventListener('click', hideTranscript);

function checkAnswer() {
    var x = document.getElementsByClassName('answer_card');

    for (let i = 0; i < x.length; i++) {
        let isTrue = x[i].children[2].value;
        if (isTrue === 'true') {
            x[i].children[1].style.color = 'green';
        }

        if (isTrue === 'false') {
            x[i].children[1].style.color = 'red';
        }
    }
}

function openTab(event, pageName) {
    console.log(2);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content');

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tab-links');
    console.log(pageName);
    for (i = 0; i < tablinks.length; i++) {
        if (pageName === tablinks[i].value) {
            tablinks[i].style.backgroundColor = 'var(--danger -color)';
            tablinks[i].classList.add('active');
        } else {
            tablinks[i].style.backgroundColor = 'var(--primary-color-btn)';
        }
    }
    document.getElementById(pageName).style.display = 'block';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

function hideTranscript() {
    let innerText = document.getElementById('hide-transcript').innerHTML;
    if (innerText == 'Hide Transcript') {
        document.getElementById('transcript__content').classList.add('hidden');
        document.getElementById('transcript__content').classList.remove('show');
        document.getElementById('hide-transcript').innerHTML = 'Show Transcript';
    } else {
        document.getElementById('transcript__content').classList.remove('hidden');
        document.getElementById('transcript__content').classList.add('show');
        document.getElementById('hide-transcript').innerHTML = 'Hide Transcript';
    }
}
document.getElementById('hide-transcript').addEventListener('click', hideTranscript);

function checkAnswer(n) {
    var x = document.getElementsByClassName('answer_card');

    for (let i = 0; i < x.length; i++) {
        let isTrue = x[i].children[2].value;
        if (isTrue === 'true') {
            x[i].children[1].style.color = 'green';
        }

        if (isTrue === 'false') {
            x[i].children[1].style.color = 'red';
        }
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('reset-answer').addEventListener('click', resetAnswer);

function resetAnswer() {
    var x = document.getElementsByClassName('answer_card');

    for (let i = 0; i < x.length; i++) {
        x[i].children[1].style.color = 'black';
        x[i].children[0].checked = false;
    }
}
