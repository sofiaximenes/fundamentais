function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const numeroDeTermos = 10;
for (let i = 0; i < numeroDeTermos; i++) {
    console.log(fibonacci(i));
}

module.exports = fibonacci;

// const array = [1, 2, 3, 4, 5, 1.5, "texto", true, -3];
// const fibonacci = fibonnacci(array);
// console.log(`O array contém ${numerosInteiros} números inteiros.`);