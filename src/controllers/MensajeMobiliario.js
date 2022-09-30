const { MensajeMobi } = require("../config/Relaciones")

const postMobiForm = async (req, res) =>  {
    const formMobi = await MensajeMobi.create(req.body).catch(error => {
        const errorLen = error.errors[0].validatorKey
        if (errorLen === "len"){
            return res.status(500).json({
                success: false,
                content: error.errors[0].message,
                message: "El numero de contacto debe se minimo 6 digitos maximo 9"
            })
        }else{
            return res.status(500).json({
                success: false,
                content: error,
                message: "Error al crear el formulario"
            })
        }
    })
    // console.log(formMobi);
    return res.status(201).json({
        success: true,
        content: formMobi,
        message: "Formulario recibido"
    })
}

const getMobi = async (req, res) => {
    const newForm = await MensajeMobi.findAll()
    // console.log(newForm)
    if(newForm.length !== 0){
        return res.status(200).json({
            success: true,
            content: newForm,
            message: "Mensajes recibidos"
        })
    }else{
        return res.status(500).json({
            success: false,
            content: [],
            message: "No hay formularios"
        })
    }
}

module.exports = {
    postMobiForm,
    getMobi,
}
