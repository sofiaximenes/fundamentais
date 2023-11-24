function fibonacci(numeroDeTermos) {
    if (numeroDeTermos <= 1) {
      return numeroDeTermos;
    } else {
      return fibonacci(numeroDeTermos - 1) + fibonacci(numeroDeTermos - 2);
    }
}
  
function fibonacciArray(numeroDeTermos) {
    const result = [];
  
    for (let i = 0; i < numeroDeTermos; i++) {
      result.push(fibonacci(i));
    }
  
    return result;
}

module.exports = fibonacciArray;