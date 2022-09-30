const { Router } = require("express");
const proyectosController = require("../controllers/Proyectos")

const proyectos_router = Router()

proyectos_router.get("/proyectos", proyectosController.devolverProyectos)
proyectos_router.post("/proyectos", proyectosController.crearProyectos)
proyectos_router.put("/proyectos/:id", proyectosController.actualizarProyecto)
proyectos_router.delete("/proyectos/:id", proyectosController.eliminarProyect)

module.exports = proyectos_router
