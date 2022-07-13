const dataFAQs = [
    {
        id: '1',
        question: 'Tôi có thể làm gì nếu phát hiện thông tin đặt phòng không chính xác?',
        detail: 'Xin vui lòng liên hệ với chúng tôi càng sớm càng tốt bằng email cs.vn@hutchgo.com và chúng tôi sẽ cố gắng liên hệ với khách sạn để sắp xếp thêm. Nếu Quý khách không thể liên hệ với chúng tôi, vui lòng liên hệ trực tiếp với khách sạn để được hỗ trợ.',
    },
    {
        id: '2',
        question: 'Tôi có thể nhận được phiếu đặt phòng khách sạn bằng cách nào?',
        detail: 'Quý khách sẽ nhận được thư xác nhận qua email sau khi yêu cầu đặt phòng được xác nhận. Quý khách nên in ra để nhận phòng.',
    },
    {
        id: '3',
        question: 'Trong trường hợp có bão hay thời tiết không thuận lợi?',
        detail: 'Xin vui lòng vui lòng liên hệ với chúng tôi nếu lịch trình của Quý khách bị ảnh hưởng bởi vấn đề thời tiết. hutchgo.com sẽ không tính bất kỳ khoản phí nào khi hủy phòng khách sạn. Tuy nhiên, phí hủy phòng khách sạn sẽ tùy thuộc vào quyết định cuối cùng của khách sạn. Nếu Quý khách không thể liên hệ với chúng tôi, vui lòng liên hệ trực tiếp với khách sạn để được hỗ trợ.',
    },
    {
        id: '4',
        question: 'Hủy đặt phòng bằng cách nào?',
        detail: 'Quý khách có thể trực tiếp hủy đặt phòng tại "Chỉnh sửa Thông tin Đặt chỗ của tôi". Xin lưu ý rằng việc hủy đặt phòng, đổi phòng hoặc hoàn tiền tùy thuộc vào chính sách của khách sạn. Sau khi xác nhận, có một số yêu cầu đặt phòng không thể bị hủy bỏ, thay đổi hoặc hoàn tiền.',
    },
];

let faqs = '';
dataFAQs.forEach((element) => {
    faqs =
        faqs +
        '<li class="faq-list-item" >' +
        '<button class="question" onclick="openFAQ(event)"><i class="bx bx-chevron-right faq-list-item__icon"></i><h3>' +
        element.question +
        '</h3></button>' +
        '<div class="faq-list-item__detail" hiddenicon="true">' +
        element.detail;
    '</div>' + '</li>';
});

const faqsElement = document.getElementById('faqs');
const faqsContent =
    '<div class="container faqs" >' +
    '<div class="faq-title">' +
    '<h2 style="margin-bottom: 30px">Một vài câu hỏi thường gặp</h2>' +
    '</div>' +
    '<div class="faq-list-container">' +
    '<ul class="faq-list">' +
    faqs +
    '</ul>' +
    '</div>' +
    '</div>';
faqsElement.innerHTML = faqsContent;
