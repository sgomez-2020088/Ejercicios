
export const securePasswordValidation = async(req, res)=>{
    try {
        const { password } = req.body

        if(!password) {
            return res.status(400).send(
                {
                    success: false,
                    message: 'Password is required'
                }
            )
        }

        const PASSWORD_REGEX =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[\S]{8,}$/
    
        const validatePassword = (password) =>{
            return PASSWORD_REGEX.test(password)
        }

        if (!validatePassword(password)) {
            return res.status(400).send(
                {
                    success: false,
                    message: 'The password must be at least 8 characters, contain an uppercase letter, a lowercase letter, a number, and a symbol.'
                }
            )
        }

        return res.status(200).send(
            {
                success: true,
                message: 'The password is strong'
            }
        )

    }catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: "General error",
                err
            }
        )
    }
}