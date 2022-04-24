const dataFAQs = [
    {
        id: '1',
        question: 'How do you ask for a room booking?',
        detail: "Here are some phrases you can use on the phone to make a booking in English. I`d like to book a (single | double | twin) room for two nights, please. I'd like to make a reservation for a (single / double / twin) room for the night of (date), please. Do you have any double rooms left for the weekend?",
    },
    {
        id: '2',
        question: 'What is the process of booking room in hotel?',
        detail: 'Once you have selected your hotel room, you can reserve it online through the hotel website. You will need to provide basic information about yourself for the booking, such as your full name and your travel dates. You can also reserve the room by calling the hotel directly.',
    },
    {
        id: '3',
        question: 'What is a double room?',
        detail: 'Double room: double rooms are assigned to two people; expect one double bed, or two twin beds depending on the hotel. Triple room: as the name might suggest, this room is equipped for three people to stay. The room will have a combination of either three twin beds, one double bed and a twin, or two double beds.',
    },
    {
        id: '4',
        question: 'What is no show in hotel?',
        detail: "A reservation becomes a No-Show when the customer who has a guaranteed reservation does not cancel it before the hotel's cancellation deadline, and never arrives to claim the reservation .",
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
    '<h2 style="margin-bottom: 30px">Frequently Asked Questions about Learning English</h2>' +
    '</div>' +
    '<div class="faq-list-container">' +
    '<ul class="faq-list">' +
    faqs +
    '</ul>' +
    '</div>' +
    '</div>';
faqsElement.innerHTML = faqsContent;
