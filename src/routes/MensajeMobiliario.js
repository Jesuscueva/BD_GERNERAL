const { Router } = require("express")
const mensaje_mobi_controller = require("../controllers/MensajeMobiliario")

const mensaje_mobi_router = Router()

mensaje_mobi_router.get("/mensajesMobiliario", mensaje_mobi_controller.getMobi)
mensaje_mobi_router.post("/enviandoFormMobiliario", mensaje_mobi_controller.postMobiForm)

module.exports = mensaje_mobi_router