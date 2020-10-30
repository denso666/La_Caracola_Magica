import { fs } from 'fs';

let text;
let index = 0;

fs.readFile('./data/phrases.txt', 'utf8', (err, data) => {
    if (err) throw err;
    text = data;
});

function clickCaracola(){
    var quest = document.getElementById('quest').value;
    if (quest.length > 5) {
        if (quest[quest.length - 1] == '?') {
            alert(text[index++]);
        }
    }
}