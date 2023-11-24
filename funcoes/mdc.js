function mdc(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// const numero1 = 20;
// const numero2 = 30;
// const resultadoMDC = mdc(numero1, numero2);
// console.log(`O MDC de ${numero1} e ${numero2} é ${resultadoMDC}`);

module.exports = mdc;
