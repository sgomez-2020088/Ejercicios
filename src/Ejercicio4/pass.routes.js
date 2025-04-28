import { Router } from "express"
import { createPass } from "./pass.controller.js"

const api = Router()


api.post('/createPass', createPass)
export default api






