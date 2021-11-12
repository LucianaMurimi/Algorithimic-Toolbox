// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    let max1 = 0;
    let max2 = 0;
    let pos1;

    //1. finding the first max
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max1){
            max1 = arr[i];
            pos1 = i;
        };
    }
    //2. finding the second max
    for(let j = 0; j < arr.length; j++){
        if((arr[j] > max2) && j != pos1){
            max2 = arr[j]
        }
    }

    //3. multiply
    return max1 * max2;
}

module.exports = max;
