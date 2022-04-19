const dataFAQs = [
    {
        id: '1',
        question: 'Why is it important to study the English language?',
        detail: 'Skills in any language are important, but skills in English can be one of the most impactful for creating new opportunities in your career and your personal life. English is the most widely-used language globally, spoken by 1.5 billion people from all over the world. Moreover, the vast majority of these people are not native English speakers. Instead, they`ve learned the language precisely because it is so commonly used, and thus helpful for understanding global culture and making connections with people from all over the world. Indeed, English is truly a “lingua franca,” defined by Oxford Dictionary as “a language that is adopted as a common language between speakers whose native languages are different.” There are complex historical reasons behind the establishment of English as the world`s common tongue, including the global trade networks of the vast English empire and England`s requirement that colonies like India speak the language. The subsequent ascendance of the United States as the world`s largest economy and perhaps its most influential culture has only reinforced this status, as American English has become the main language not only of business but of technology, the internet, music, movies, television, and more. Thus, regardless of whether you are a native English speaker or have learned it (or are currently learning it) as a second language, you can always benefit from improving your skills in this common tongue. It opens up the world more than any other language, whether for traveling through English-speaking countries like the United States and England or for working in tourism and hospitality in other countries. English proficiency can also be a vital asset for your communications skills for business, particularly if you work in tech or other global industries. And even as a native speaker, you can always improve the clarity and concision of your writing, which can improve everything from your emails to your job prospects in publishing.',
    },
    {
        id: '2',
        question: 'What careers can I pursue with a language background in English?',
        detail: 'Because English is so widely spoken, virtually any career that crosses borders can benefit from English language proficiency, whether you have international business in America, England, or even non-English speaking countries where you aren’t fluent in the local language. And if you are one of the 65 million Americans that speak a language other than English at home, you can gain even more from improving your English skills, whether you’re a banker, a small business owner, or simply raising a family. While native English speakers may have no problems navigating the world of business or daily life in their home country, improving your English skills can still give you a difference-making advantage in a wide range of careers. For example, any jobs involving writing require above-average skills in English, from copywriters to public relations professionals to journalists. And experts in fields like the arts and humanities, the social sciences, and other areas of academia rely on superior English language skills for close readings and analyses of texts. Finally, there are also career paths specifically focused on language that require strong English skills, whether as a native speaker or as a second language. Since it is the most common language in the world of entertainment and culture, the majority of translators convert text either to or from English. And because these language skills are in demand everywhere in the world, native English speakers have exciting opportunities to live abroad while working as an English teacher.',
    },
    {
        id: '3',
        question: 'What is the best way to learn a second language?',
        detail: 'There is no one universally accepted theory of how a child learns a second language. Our philosophy in the ESL department is that language is learned not for its own sake but in order to communicate and to find out about the world. For that reason our teaching is organized around major topics, such as animals, ecology, inventions, culture and language, etc. Each topic consists of linguistic tasks, and incorporates study and computer skills. Students are exposed to written and spoken language that is (made) comprehensible to them, and engaged in different kinds of productive activities. <br/> Professor Krashen, the eminent researcher who in my opinion has the most coherent and convincing theory of language learning, has postulated that language is acquired, both in the language and the mainstream classroom, when the student is motivated by the task, feels low or zero anxiety, and has had his or her self-esteem protected or enhanced. If such conditions prevail, and the input is comprehensible, interesting and relevant, then there is no filter or barrier preventing the natural acquisition of language.',
    },
    {
        id: '4',
        question: 'What is the difference between written and spoken language?',
        detail: 'In general spoken language is spontaneous and unplanned, irrevocable and transient (unless tape-recorded). When speaking, the speaker and the listener(s) are both present and the listener responds to and can interrupt the speaker. Part of the message can be conveyed by intonation. Writing on the other hand is often preplanned, it can be revised for content, and checked for grammatical accuracy. <br/> It is permanent. Often the writer does not know the reader(s) and receives no feedback. Intonation obviously plays no part. It is not surprising therefore that considerable differences between the two kinds of language in terms of word choice and word order, grammatical accuracy and complexity. For example, spoken language tends to have more idioms and phrasal verbs than written language (put up with vs. tolerate). There is much more repetition in spoken language, which also abounds with fillers such as you know, I mean etc. Spoken language rarely has long, complex or complete sentences; it consists of strings of short phrases, backtracking and restarting or reformulating.',
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
