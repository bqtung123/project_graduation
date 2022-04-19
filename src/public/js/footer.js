const footerElement = document.getElementById('footer');

const footerContent =
    '<div class="container footer-container">' +
    '<div class="row-footer">' +
    '<div class="footer__slogan">' +
    '<h2>Travel <span>Agency</span></h2>' +
    '<p style="padding: 20px 50px 15px 0px;">Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners. Everything you find here has been specially created by the British Council, the world\'s English teaching experts.</p>' +
    '</div>' +
    '<div class="footer_navigation">' +
    '<h2>Navigation</h2>' +
    '<ul>' +
    '<li><a href="#"><i class="bx bx-home-alt"></i> Home</a></li>' +
    '<li><a href="#"><i class="bx bx-book-alt"></i> Room</a></li>' +
    '<li><a href="#"><i class="bx bx-video" ></i> Flight</a></li>' +
    '<li><a href="#"><i class="bx bx-message-square-detail"></i> Today\'s Deal</a></li>' +
    '<li><a href="#"><i class="bx bxs-music"></i> Audio</a></li>' +
    '</ul>' +
    '</div>' +
    '<div class="footer__society">' +
    '<h2>Follow me</h2>' +
    '<ul class="society">' +
    '<li><a href="#"><i style="color: #0c8af0;" class="fab fa-facebook-square"></i></i></a></li>' +
    '<li><a href="#"><i style="color: var(--danger-color);" class="fab fa-youtube"></i></a></li>' +
    '<li><a href="#"><i style="color: #0c8af0;" class="fab fa-twitter"></i></a></li>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div style="text-align: center;font-weight: bolder;">BQT-©copyright 2022</div>';

footerElement.innerHTML = footerContent;
