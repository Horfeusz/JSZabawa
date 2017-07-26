'use strict';

function test(arg1 = 'eee1', arg2, arg3) {
    console.log("arg1", arg1);
    console.log("arg2", arg2);
    console.log("arg3", arg3);
}


const person = 'Comandeer';
console.log(`${person} mówi, że
nowe linie działają!
Tak jak i dodawanie: ${2 + 2}`);

const tablica = ['heniek', 'staszek', 'zdzisałw'];
const liczby = [4, 8, 25, 6, 9];

test(...tablica);
console.log(Math.max(...liczby));

const arrow = () => {
    console.log('Jestem prostą funkcją strzałkową!');
};

const arrowWithParams = (a) => {
    console.log('Ja też, ale dodatkowo mam parametr: ', a);
}

const stillValidArrow = a => 'Ja też mam tylko jeden parametr: ' + a;

arrow();
arrowWithParams('No i co Heniek ?');

const eee = stillValidArrow('eeee');
console.log(eee);

