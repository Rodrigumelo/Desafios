
function countLetterA(str) {
    const matches = str.match(/[aA]/g);
    return matches ? matches.length : 0;
}

if (process.argv.length < 3) {
    console.log('Por favor, forneça uma string como argumento.');
    process.exit(1);
}

const inputString = process.argv.slice(2).join(' ');
const count = countLetterA(inputString);

console.log(`A letra 'a' (maiúscula ou minúscula) ocorre ${count} vez(es) na string fornecida.`);
