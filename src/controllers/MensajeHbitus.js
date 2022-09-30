// const { Op } = require("sequelize/dist")
const { MensajeHbts } = require("../config/Relaciones")
const { Op } = require("sequelize")

const postForm = async (req, res) => {
    
    const form = await MensajeHbts.create(req.body).catch(error => {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Ocurrio error al enviar"
        })
    })
    
    return res.status(201).json({
        success: true,
        content: form,
        message: "Mensaje Recibido exitosamente"
    })
}

const getLikeNameMessage = async (req, res) => {
    // console.log(req.query)
    const {empresa, email} = req.query
    const mensaggeEncontrado = await MensajeHbts.findAll({
        where: {
            mensaHbtEmpre: {
                [Op.like] : "%" + empresa + "%"
            }
        }
    })
    // console.log(mensaggeEncontrado);
    if(mensaggeEncontrado.length !== 0){
        return res.status(200).json(
            {
                success: true,
                content: mensaggeEncontrado,
                message: "Empresas que coinciden"
            }
        )
    }else{
        return res.status(500).json({
            success: false,
            content: null,
            message: "No se encontro Ninguna Empresa con ese nombre"
        })
    }
    
}
const getForm = async (req, res) => {
    const allForm = await MensajeHbts.findAll().catch(error => {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Error"
        })
    })
    return res.status(200).json({
        success: true,
        content: allForm,
        message: "Mostrando todos los Mensajes"
    })
}


module.exports = {
    postForm,
    getForm,
    getLikeNameMessage,
}