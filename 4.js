function nextOddNumber(sequence) {
    return sequence[sequence.length - 1] + 2;
}

function nextPowerOfTwo(sequence) {
    return sequence[sequence.length - 1] * 2;
}

function nextPerfectSquare(sequence) {
    const lastNumber = sequence[sequence.length - 1];
    const nextIndex = Math.sqrt(lastNumber) + 1;
    return nextIndex * nextIndex;
}

function nextEvenSquare(sequence) {
    const lastNumber = sequence[sequence.length - 1];
    const nextIndex = Math.sqrt(lastNumber) + 2; 
    return nextIndex * nextIndex;
}

function nextFibonacci(sequence) {
    const length = sequence.length;
    return sequence[length - 1] + sequence[length - 2];
}

function nextNonPrime(sequence) {
    let lastNumber = sequence[sequence.length - 1];
    while (true) {
        lastNumber++;
        if (!isPrime(lastNumber)) return lastNumber;
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const seqA = [1, 3, 5, 7];
const seqB = [2, 4, 8, 16, 32, 64];
const seqC = [0, 1, 4, 9, 16, 25, 36];
const seqD = [4, 16, 36, 64];
const seqE = [1, 1, 2, 3, 5, 8];
const seqF = [2, 10, 12, 16, 17, 18, 19];

console.log("Próximo elemento de a:", nextOddNumber(seqA));
console.log("Próximo elemento de b:", nextPowerOfTwo(seqB));
console.log("Próximo elemento de c:", nextPerfectSquare(seqC));
console.log("Próximo elemento de d:", nextEvenSquare(seqD));
console.log("Próximo elemento de e:", nextFibonacci(seqE));
console.log("Próximo elemento de f:", nextNonPrime(seqF));
