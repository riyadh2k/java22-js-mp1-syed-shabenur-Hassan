

// let name='Hassan';
// console.log(name);

// let firstName= 'Syed Shabenur';
// lastName='Hassan';
// console.log(firstName+' ' +lastName);

// const arrayNumbers = [3,5,7,9,4];
// console.log(arrayNumbers);
// arrayNumbers [3] = 1000;
// console.log(arrayNumbers);

// const p = document.createElement('p');

// document.body.prepend(p);
// p.innerText= 'Nu bör jag synas!';

// const list = document.createElement('ol');
// document.body.append(list);
// const item1 = document.createElement('li');
// item1.innerText='item1';
// list.append(item1);

// const item2 = document.createElement('li');
// item2.innerText='item2';
// list.append(item2);

// item1.remove();

// const random = Math.random();
// console.log(random);

// const randomTen = random*10;
// console.log(randomTen);

// const randomRounded = Math.round(randomTen);
// console.log(randomRounded);

// const number = 1;
// const text = '1';

// console.log(number == text);

// console.log(number === text);


// console.log(typeof (number+ text) + number+text);


// console.log(number < text);

// const ol = document.createElement('ol');
// document.body.append(ol);

// for(let i=0; i<10; i++){

//     const li = document.createElement('li');
//     ol.append(li);
// }

// const liElements = document.querySelectorAll('li');
// console.log(liElements);
// let index = 0;
// for(const li of liElements){
//     console.log(li);
//     li.style.background = 'hotpink';

//     if(index%2==1){
//         li.style.background='black';
//     }
//     index++;
// }

// let randomNumber = 10;
// while(randomNumber != 0){ 
//     randomNumber = Math.round( Math.random()*10 );
//     console.log('Random',randomNumber,times);
//     times++;
// }

// console.log('hej "tjäna"');

// const name= 'Bob Rose';
// const greeting = `Hello, ${name}`;

// console.log(greeting);

// const multipleLines= `rad
// rad
// en ny rad`;

// console.log(multipleLines);

// const calc = `Two plus two equals to ${2+2}`;

// console.log(calc);






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


const highlightedNumber=[2,4,8];
const row3Text = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
const outBox = document.createElement('div');
    outBox.style.border='2px solid black';
    outBox.style.display='flex';
    outBox.style.flexDirection='row';
    outBox.style.justifyContent='space-around';
    outBox.style.padding='2rem';


console.log(outBox);

for (let i = 0; i < 3; i++) {
    const arrayBox = document.createElement('div');
    
    arrayBox.style.background = '#a8a8f9';
    arrayBox.style.padding = '10px';
    arrayBox.style.display = 'flex';
    arrayBox.style.flexFlow = 'column';
    outBox.append(arrayBox);

    for(let j=1; j<11; j++){
        const p = document.createElement('p');
        p.style.margin='0';
        p.style.fontSize= '20px'

        arrayBox.append(p);
        //console.log(p);
        if (i===0){
            p.innerText=j;
        }else if (i===1){
            p.innerText=j;
            p.style.textAlign='center';
        } else{
            p.innerText=row3Text[j];
        }

    }
}
 document.body.append(outBox);



// const pElements = document.querySelectorAll('p');
// console.log(pElements);
// let index = 0;
// for(const p of pElements){
//     console.log(p);
//     p.style.background = 'hotpink';

//     if(index%2==1){
//         p.style.background='black';
//     }
//     index++;
// }

// const liElements= document.querySelectorAll('li');
// console.log(liElements);

// let numberForBorder=1;
// for(const li of liElements){
//          //console.log(li);
//          li.style.border = '2px solid hotpink';
// }    

// const temp = document.querySelectorAll('p');
// console.log(temp);

// ------------------
// let variable = 10;

// function log(text){
//     console.log(variable);
//     console.log(text);
// }

// log('så slipper vi ');

// function add(x,y){
//     return x+y;
// }
// console.log(add(3,9));

// övning 1
// const ol = document.createElement('ol');
// document.body.append(ol);

// for(let i=0; i<10; i++){

//     const li = document.createElement('li');
//     ol.append(li);
// }

// //2.
// const liElements= document.querySelectorAll('li');
// console.log(liElements);

// let numberForBorder=1;
// for(const li of liElements){
//          //console.log(li);
//          li.style.border = '2px solid hotpink';
// }    


