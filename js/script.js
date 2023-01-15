// Part-one
let amount = 6;

for (let i = 1; i < amount; i++) {
    const p = document.createElement('p');


    const hue = 80 + (80 * i / (amount - 1));
    p.style.background = `hsl(${hue}, 100%, 70%)`;

    console.log(hue);

    p.innerText = 'Rad' + i;
    p.style.fontSize = i + '2px';
    p.style.textAlign = 'center';
    document.body.append(p);
}

//Part-Two
const highlightedNumber = [2, 4, 8];
const row3Text = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
const outBox = document.createElement('div');
outBox.style.border = '2px solid black';
outBox.style.display = 'flex';
outBox.style.flexDirection = 'row';
outBox.style.justifyContent = 'space-around';
outBox.style.padding = '2rem';


console.log(outBox);

for (let i = 0; i < 3; i++) {
    const arrayBox = document.createElement('div');

    arrayBox.style.background = '#a8a8f9';
    arrayBox.style.padding = '10px';
    arrayBox.style.display = 'flex';
    arrayBox.style.flexFlow = 'column';
    outBox.appendChild(arrayBox);

    for (let j = 1; j < 11; j++) {
        const p = document.createElement('p');
        p.style.margin = '0';
        p.style.fontSize = '20px'


        arrayBox.append(p);
        //console.log(p);
        if (i === 0) {
            p.innerText = j;
            p.style.width = '40px'
        } else if (i === 1) {
            p.innerText = [11 - j];
            p.style.textAlign = 'center';
            p.style.width = '40px'
        } else {
            p.innerText = row3Text[j - 1];
            p.style.textAlign = 'right';
            p.style.width = '50px'
        }
        if (highlightedNumber[i] === j) {
            p.style.backgroundColor = 'transparent';
        } else if (j % 2 === 0) {
            p.style.backgroundColor = 'white';
        } else {
            p.style.backgroundColor = 'black';
            p.style.color = 'white';
        }

    }
}
document.body.append(outBox);

