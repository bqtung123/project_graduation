let searchbar = document.getElementById('search-bar');
searchbarContent =
    '<div class="container">' +
    ' <form class="search-bar" action="/search">' +
    '<input type="text" class="search-bar__input" name="searchCourse" placeholder="Search" autocomplete="off">' +
    '<button type="submit" class="search-bar__btn btn-primary">Search</button>' +
    '</form>' +
    '</div>';

searchbar.innerHTML = searchbarContent;
