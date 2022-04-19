const header = document.getElementById('header');
const contentHeader = 
'<nav class="nav container">' +
    '<a href="index.html" class="nav__logo">E Learning</a>' +

    '<div class="nav__menu" id="nav-menu">' +
        '<ul class="nav__list">' +
            '<li class="nav__item">' +
                '<a href="index.html" class="nav__link active-link">' +
                    '<i class="bx bx-home-alt nav__icon"></i>' +
                    '<span class="nav__name">Home</span>' +
                '</a>' +
            '</li>' +
            
            '<li class="nav__item">' +
                '<a href="grammar.html" class="nav__link">' +
                    '<i class="bx bx-book-alt nav__icon" ></i>' +
                    '<span class="nav__name">Grammar</span>' +
                '</a>' +
            '</li>' +

            '<li class="nav__item">' +
                '<a href="videoCourses.html" class="nav__link">' +
                    '<i class="bx bx-video nav__icon" ></i>' +
                    '<span class="nav__name">Video</span>' +
                '</a>' +
            '</li>' +

            '<li class="nav__item">' +
                '<a href="videoCourses.html" class="nav__link">' +
                    '<i class="bx bxs-music nav__icon" ></i>' +
                    '<span class="nav__name">Audio</span>' +
                '</a>' +
            '</li>' +

            '<li class="nav__item">' +
                '<a href="#" class="nav__link">' +
                    '<i class="bx bx-message-square-detail nav__icon"></i>' +
                    '<span class="nav__name">Vocabulary</span>' +
                '</a>' +
            '</li>' +
            '<li class="nav__item">' +
                '<a href="login.html" class="nav__link">' +
                    '<i class="bx bx-log-in-circle nav__icon" ></i>' +
                    '<span class="nav__name">Log in</span>' +
                '</a>' +
            '</li>' +
            '<li class="nav__item" style="display: flex; align-items: center;">' +
                '<i class="bx bxs-toggle-left nav__icon" id="light" status="light" hidden="false" style = "font-size:2.25rem; transition: width 2s;" onclick="toggleDarkModeStatus(event)" ></i>' +
                '<i class="bx bxs-toggle-right nav__icon" id="dark" status="dark" hidden="true" style = "font-size:2.25rem; " onclick="toggleDarkModeStatus(event)" ></i>' +
                '<span class="nav__name">Dark mode</span>' +
            '</li>' +
        '</ul>' +
    '</div>' +
'</nav>';

