const contacts = [
    'Chris:2232322', 
    'Sarah:3453456', 
    'Bill:7654322', 
    'Mary:9998769', 
    'Dianne:9384975'
];

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let num = input.value;
    input.value = '';
    input.focus();

    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }

        para.textContent += i + ' ';
    }
});