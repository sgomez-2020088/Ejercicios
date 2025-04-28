import { Router } from "express";
import { securePasswordValidation } from "./validacionContraseña.controller.js"
const api = Router()

api.post(
    '/validate-password',
    securePasswordValidation
)

export default api