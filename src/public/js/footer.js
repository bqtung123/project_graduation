const footerElement = document.getElementById('footer');

const footerContent =
    '<div class="container footer-container">' +
    '<div class="row-footer">' +
    '<div class="footer__slogan">' +
    '<h2>Travel <span>Agency</span></h2>' +
    '<p style="padding: 20px 50px 15px 0px;">travel agency là công cụ tìm nơi lưu trú với khả năng so sánh giá bao quát. Giá hiển thị được cung cấp bởi rất nhiều nơi lưu trú và website đặt phòng. Điều này có nghĩa là tuy người dùng lựa chọn nơi lưu trú phù hợp với nhu cầu trên travel agency, việc đặt phòng sẽ được hoàn tất qua website đặt phòng (liên kết với website của chúng tôi).</p>' +
    '</div>' +
    '<div class="footer_navigation">' +
    '<h2>Navigation</h2>' +
    '<ul>' +
    '<li><a href="#"><i class="bx bx-home-alt"></i> Home</a></li>' +
    '<li><a href="#"><i class="bx bx-book-alt"></i> Phòng</a></li>' +
    '<li><a href="#"><i class="bx bx-video" ></i> Vé máy bay</a></li>' +
    '<li><a href="#"><i class="bx bx-message-square-detail"></i> Ưu đãi</a></li>' +
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
