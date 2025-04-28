// Controlador
import Romano from './romanos.model.js'

const romanToInt = (roman) => {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let prevValue = 0;

    // Recorremos cada carácter del número romano de derecha a izquierda
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanNumerals[roman[i]];

        // Si el valor actual es menor que el valor previo, se resta
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        // Actualizamos el valor previo
        prevValue = currentValue;
    }

    // Validar si el número romano es válido
    if (!isValidRoman(roman)) {
        return { message: "No es un número romano válido" };
    }

    return { entero: total };
};

// Validar si el número romano tiene caracteres no válidos
const isValidRoman = (roman) => {
    const validRomanRegex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    return validRomanRegex.test(roman);
};

// Ejemplo de uso
const input = { romano: "XIV" };
const result = romanToInt(input.romano);

console.log(result);  // { entero: 14 }
