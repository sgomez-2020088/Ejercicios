export const temperatureConvertions = async(req, res) =>{
    try {
        const { value, unit } = req.body
        const regex = /^-?\d+(\.\d+)?$/

        if(!value) return res.send(
            {
                success: false,
                message: "value cannot be empty "
            }
        )

        if(!unit) return res.send(
            {
                success: false,
                message: "unit cannot be empty "
            }
        )

        
        if (!regex.test(value)) {
            return res.send(
                {
                    success: false,
                    message: "Please enter a valid number for value"
                }
            )
        }


        let far = 0
        let kel = 0
        let cel = 0
        switch (unit) {
            case 'C':
                far = ((value* (9/5))+32).toFixed(2)
                kel = (parseInt(value) + 273.15).toFixed(2)
                return res.send(
                    {
                        success: true,
                        "C": `${value}`,
                        "F": `${far}`,
                        "K": `${kel}`

                    }
                )
                break;
            case 'F':
                cel = ((value-32)*(5/9)).toFixed(2)
                kel = (((5/9)*(value-32))+273.15).toFixed(2)
                return res.send(
                    {
                        success: true,
                        "F": `${value}`,
                        "C": `${cel}`,
                        "K": `${kel}`

                    }
                )
                break;
            case 'K':
                cel = (parseInt(value) - 273.15).toFixed(2)
                far = (((9/5)*(value - 273.15))+32).toFixed(2)
                return res.send(
                    {
                        success: true,
                        "K": `${value}`,
                        "C": `${cel}`,
                        "F": `${far}`

                    }
                )
                break;
            default:
                return res.send(
                    {
                        success: false,
                        message: "¨Please enter a valid unit"
                    }
                )
                break;
        }
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            {
                success: false,
                message: "General error converting temperature",
                err
            }
        )   
    }
    
}

