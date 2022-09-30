const { Router } = require("express");
const mensaje_habi_controller = require("../controllers/MensajeHbitus")

const mensaje_habi_router = Router()

mensaje_habi_router.get("/mensajeHabitus", mensaje_habi_controller.getForm)
mensaje_habi_router.post("/creandoForm", mensaje_habi_controller.postForm)
mensaje_habi_router.get("/buscarMensaje", mensaje_habi_controller.getLikeNameMessage)

module.exports = mensaje_habi_router
