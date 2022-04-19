let searchbar = document.getElementById('search-bar');
<<<<<<< HEAD
searchbarContent =
    '<div class="container">' +
    ' <form class="search-bar" action="/search">' +
    '<input type="text" class="search-bar__input" name="searchCourse" placeholder="Search" autocomplete="off">' +
    '<button type="submit" class="search-bar__btn btn-primary">Search</button>' +
    '</form>' +
    '</div>';

searchbar.innerHTML = searchbarContent;
=======
searchbarContent = 
'<div class="container">' +
    '<div class="search-bar">' +
        '<input type="text" class="search-bar__input" name="searchCourse" placeholder="Search" autocomplete="off">' +
        '<button class="search-bar__btn btn-primary" onclick="Test()">Search</button>' +
    '</div>' +
'</div>';

searchbar.innerHTML = searchbarContent;

>>>>>>> 4199fdb04bb85cdaf8d6dfc3295c3d44003e7902
