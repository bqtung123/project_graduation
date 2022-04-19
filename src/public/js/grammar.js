let content = document.getElementById('grammar-content');
let input = document.getElementById('input-content');

var doc = new DOMParser().parseFromString(input.value, "text/html");

content.innerHTML = doc.firstChild.innerHTML;