
function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextFib = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextFib);
    }
    return sequence;
}


function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = fibsRec(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}


console.log(fibs(8));      
console.log(fibs(1));     
console.log(fibs(0));      
console.log(fibs(10));     

console.log(fibsRec(8));   
console.log(fibsRec(1));   
console.log(fibsRec(0));   
console.log(fibsRec(10));  
