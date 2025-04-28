//Sergio Daniel Gomez Chico 
//2020088
const nuevaContra  = (longitud, mayusculas, numeros, simbolos) => {
    let caracteresPermitidos = 'abcdefghijklmnopqrstuvwxyz'

    if (mayusculas) caracteresPermitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numeros) caracteresPermitidos += '0123456789'
    if (simbolos) caracteresPermitidos += '!@#$%^&*()-_=+[{]}|;:,.<>?'
    return Array.from({ length: longitud }, () => caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)]).join('')
}

export const createPass = (req, res) => {
    try {
        const { longitud, mayusculas, numeros, simbolos } = req.body

        
        const mayusB = (mayusculas === 'true') ? true : false
        const numB = (numeros === 'true') ? true : false
        const simB = (simbolos === 'true') ? true : false

        if(longitud <= 0) return res.status(400).send({ message: 'La longitud debe ser mayor a 0' })

   
        if (mayusculas !== 'true' && mayusculas !== 'false') 
            return res.status(400).send({ message: 'El valor de mayusculas debe ser booleano' })
        

        if (numeros !== 'true' && numeros !== 'false') 
            return res.status(400).send({ message: 'El valor de numeros debe ser booleano'  })
        

        if (simbolos !== 'true' && simbolos !== 'false') 
            return res.status(400).send({ message: 'El valor de simbolos debe ser booleano'  })
        

        const randomPass = nuevaContra (longitud, mayusB, numB, simB)

        return res.status(201).send({
            success: true,
            message: 'Contraseña generada exitosamente',
            password: randomPass
        })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error generando la contraseña', success: false })
    }
}
