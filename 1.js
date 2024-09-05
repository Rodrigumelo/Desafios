function isPerfectSquare(x) {
    let s = Math.sqrt(x);
    return s * s === x;
}

function isFibonacci(n) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

const num = parseInt(process.argv[2]);

if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
