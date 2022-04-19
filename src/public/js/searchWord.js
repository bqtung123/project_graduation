function reloadPage() {
    location.reload();
}

function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible';

    var word = document.getElementById('word');
    var definition = document.getElementById('definition');
    var example = document.getElementById('example');
    var spell = document.getElementById('spell');
    var searchResult = document.getElementById('searchResult');
    var wordToSearch = document.getElementById('searchBox').value;
    var synonyms = document.getElementById('synonyms');
    var antonyms = document.getElementById('antonyms');

    var request1 = new XMLHttpRequest();
    request1.open('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/' + wordToSearch);
    request1.onload = function () {
        word.innerHTML = '';
        synonyms.innerHTML = '';
        antonyms.innerHTML = '';
        definition.innerHTML = '';
        example.innerHTML = '';
        spell.innerHTML = '';
        var data = JSON.parse(this.response);
        if (!data.title) {
            word.innerHTML = data[0].word;
            let meanings = data[0].meanings;
            meanings.forEach((element) => {
                var def = document.createElement('div');
                var exam = document.createElement('div');
                exam.innerHTML = element.definitions[0].example;
                example.appendChild(exam);
                def.innerHTML =
                    '+ (' + element.partOfSpeech + ') ' + element.definitions[0].definition;
                if (element.definitions[0].synonyms.length > 0) {
                    element.definitions[0].synonyms.forEach((ele) => {
                        var s = document.createElement('div');
                        s.innerHTML = `<li>${ele}</li>`;
                        synonyms.appendChild(s);
                    });
                }
                definition.appendChild(def);
            });
            // spell.innerHTML = '/'+data[0].phonetic+'/';
            var audio = document.createElement('AUDIO');
            audio.setAttribute('src', data[0].phonetics[0].audio); //  set the source for audio in html tag
            audio.setAttribute('controls', 'controls');
            audio.setAttribute('autoplay', 'autoplay');
            spell.appendChild(audio);

            //antonyms
            //synonyms
        } else {
            console.log(this.response);
            searchResult.innerHTML = `<h2 style="height:3   50px">Can not found word!</h2>`;
        }
    };
    request1.send();
}
