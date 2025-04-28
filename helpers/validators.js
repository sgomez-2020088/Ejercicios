//Validaciones

//Ejercicio 1
const PASSWORD_REGEX =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[\S]{8,}$/
    
const validatePassword = (password) =>{
    return PASSWORD_REGEX.test(password)
}

export default validatePassword