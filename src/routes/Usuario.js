const { Router } = require("express")
const usuario_controller = require("../controllers/Usuario")

const usuario_router = Router()

usuario_router.post("/registroUsuario", usuario_controller.registrar)
usuario_router.post("/loginUsuario", usuario_controller.login)
usuario_router.post("/verificar", usuario_controller.verifyToken)

module.exports = usuario_router