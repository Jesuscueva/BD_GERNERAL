const servicio_model    = require("../models/Servicios.js")
const categoria_model   = require("../models/Categoria")
const usuario_model     = require("../models/Usuario")
const proyectos_model   = require("../models/Proyectos")
const mensajeHbts_model = require("../models/MensajeHabitus")       
const mensajeMobi_model = require("../models/MensajeMobiliario")


const Servicio    = servicio_model()
const Categoria   = categoria_model()
const Proyectos   = proyectos_model()
const MensajeHbts = mensajeHbts_model()
const MensajeMobi = mensajeMobi_model()
const Usuario     = usuario_model()


Categoria.hasMany(Proyectos, {
    foreignKey: { name: "cat_id", allowNull: false }
})
Proyectos.belongsTo(Categoria, {foreignKey: "cat_id"})

// Proyectos.sync({force:true})
// Categoria.sync({force: true})
// MensajeHbts.sync({force: true})
// Usuario.sync({force: true})


module.exports = {
    Servicio,
    Categoria,
    Proyectos,
    MensajeHbts,
    MensajeMobi,
    Usuario,
}