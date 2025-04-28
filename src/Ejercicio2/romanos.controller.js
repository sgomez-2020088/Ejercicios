// CONTROLADOR PARA LA CONVERCION
const numeroRoman = (roman) => {
    const numerosRomanos = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let total = 0
    let valorAnterior = 0


    for (let i = roman.length - 1; i >= 0; i--) {
        const valorNuevo = numerosRomanos[roman[i]]
        if (valorNuevo < valorAnterior) {
            total -= valorNuevo
        } else {
            total += valorNuevo
        }
        valorAnterior = valorNuevo
    }

    return total
}

const isValidRoman = (roman) => {
    const validacionRomano   = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
    return validacionRomano.test(roman)
}

export const convertirRomanoAEntero = (req, res) => {
    const { romano } = req.body

    if (!isValidRoman(romano)) {
        return res.status(400).send({
            message: "No es un número romano válido"
        })
    }

    try {
        const entero = numeroRoman(romano)
        
        return res.status(200).send({
            entero
        })
    } catch (err) {
        console.error(err)
        return res.status(500).send({
            message: "General error"
        })
    }
}
