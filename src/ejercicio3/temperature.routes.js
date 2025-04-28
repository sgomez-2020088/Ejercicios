import { Router } from "express";
import { temperatureConvertions } from "./temperature.controller.js";

const api = Router()

api.post(
    '/',
    temperatureConvertions
)

export default api 