const { Router } = require("express")
const categoria_controller = require("../controllers/Catergoria")

const categoria_router = Router()

categoria_router.post("/categoria", categoria_controller.crearCategoria)
categoria_router.get("/categoria", categoria_controller.devolverCategorias)
categoria_router.put("/categoria/:id", categoria_controller.actualizarCategoria)
categoria_router.delete("/categoria/:id", categoria_controller.eliminarCategoria)

module.exports = categoria_router