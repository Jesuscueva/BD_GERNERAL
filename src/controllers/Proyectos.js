const { Proyectos, Categoria } = require("../config/Relaciones")

const devolverProyectos = async (req, res) =>{
    const proyectAll = await Proyectos.findAll({
        include:{
            model: Categoria
        }
    }).catch(erro => {
        return res.status(500).json({
            success : false,
            content: erro,
            message: "No se pudo obtener nada"
        })
    })  
    // console.log(proyectAll)
    return res.status(200).json({
        success: true,
        content: proyectAll,
        message: "Mostrando proyectos"
    })
}

const crearProyectos = async (req, res) => {
    const newProduct = await Proyectos.create(req.body).catch(error => {
        return res.status(500).json({
            success: false,
            content: error,
            message: "error al crear el producto"
        })
    })
    // console.log(newProduct)
    return res.status(201).json({
        success: true,
        content: newProduct,
        message: "Creado exitosamente"
    })
}

const actualizarProyecto = async (req, res) => {
    const { id } = req.params
    const upDate = await Proyectos.update(req.body, {
        where: {
            proyectoId: id
        }
    }).catch( error => {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error al actualizar el proyecto"
        })
    })
    return res.status(200).json({
        success: true,
        content: null,
        message: upDate[0] === 0 ? "Nose actualizo nada" : "Proyecto actualizado correctamente"  
    })
}
const eliminarProyect = async (req, res) => {
    const { id } = req.params
    const deleteProyect = await Proyectos.destroy({
        where: {
            proyectoId: id
        }
    }).catch( error => {
        res.status(500).json({
            success: false,
            content: error,
            message: "No se pudo eliminar"
        })
    })
    return res.status(200).json({
        success: true,
        content: null,
        message: deleteProyect !== 0 ? "eliminado correctamente " : "No se elimino nada"
    })
}

module.exports = {
    devolverProyectos,
    crearProyectos,
    actualizarProyecto,
    eliminarProyect
}