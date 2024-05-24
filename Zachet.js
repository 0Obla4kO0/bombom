const fs = require('fs');

function findN(arr) {
    let isEven = arr[0] % 2 === 0;

    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] % 2 === 0) !== isEven) {
            return arr[i];
        }
    }
}

const array = [2, 4, 6, 8, 10, 11];
const N = findN(array);

fs.writeFile('result.txt', N !== undefined ? N.toString() : 'Число не найдено', (err) => {
    if (err) throw err;
    console.log('Результат записан в файл result.txt');
});