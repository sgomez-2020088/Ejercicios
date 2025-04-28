import { Router } from "express";
import { convertirRomanoAEntero } from "./romanos.controller.js";

const api = Router()

api.post('/converter', convertirRomanoAEntero)

export default api