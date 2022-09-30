const { Categoria } = require("../config/Relaciones")

const crearCategoria = async (req,res) => {
    // console.log(req.body)
    const nuevaCategoria = await Categoria.create(req.body).catch((error) => {
        // console.log(nuevaCategoria)
        console.log(error.errors[0].validatorKey);
        if(error.errors[0].validatorKey){
            return res.status(500).json({
                success: false,
                content: [],
                message: "La categoria ya esta creada por favor elige otro nombre"
            })
        }else{
            return res.status(500).json({
                success: false,
                content: error,
                message: "error al crear la categoria"
            })
        }
        
    })
    console.log(nuevaCategoria)
    return res.status(201).json({
        success: true,
        content: nuevaCategoria,
        message: "Categoria creado correctamente"
    })
}

const devolverCategorias = async (req, res) => {

    const categorias = await Categoria.findAll().catch(error => {
        return res.status(500).json({
            success: false,
            content: error,
            message: "Hubo problemas"
        })
    })
    console.log(categorias)
    res.status(200).json({
        success: true,
        content: categorias,
        message: "Todos las categorias"
    })
}

const actualizarCategoria = async (req, res) => {
    // console.log(req.params)
    const { id } = req.params
    const categoriaActualizada = await Categoria.update(req.body, {
        where: {
            categoriaId: id
        }
    }).catch(error => {
        if( error.errors[0].validatorKey ){
            return res.json({
                message: "La categoria ya existe"
            })
        }
        // return res.status(500).json({
        //     success: false,
        //     content: error,
        //     message: "No se pudo actualizar"
        // })
    })
    //console.log(categoriaActualizada)
    res.status(200).json({
        success: true,
        content: null,
        message: categoriaActualizada[0] === 0 ? "No se actualizo nada" : "Se actualizo correctamene"
    })
}

const eliminarCategoria = async (req, res) => {
    const { id } = req.params
    const eliminado = await Categoria.destroy({
        where: {
            categoriaId: id, 
        },
    }).catch(error => {
        res.status(500).json({
            success: false,
            content: error,
            message: "Hubo problemas al eliminar"
        })
    } )
    console.log(eliminado)
    res.status(200).json({
        success: true,
        content: null,
        message: eliminado !== 0 ?   "eliminando correctamente" : "No se elmino nada" 
    })
}

module.exports = {
    crearCategoria,
    devolverCategorias,
    actualizarCategoria,
    eliminarCategoria,
}