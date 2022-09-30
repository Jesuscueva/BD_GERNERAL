const express = require("express")
const { json } = require("body-parser")
const {conexion} = require("./Sequelize")
const categoria_router = require("../routes/Categoria")
const proyectos_router = require("../routes/Proyectos")
const mensaje_habi_router = require("../routes/MensajeHabitus")
const mensaje_mobi_router = require("../routes/MensajeMobiliario")
const usuario_router = require("../routes/Usuario")

module.exports = class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5150
        this.bodyParser()
        this.CORS()
        this.rutas()
    }
    bodyParser() {
        this.app.use(json());
    }
    CORS(){
        this.app.use((req, res, next)=>{
        // http://127.0.0.1:5500/HabitusVersion3_2022/index.html
        // Access-Control-Allow-Origin => indica que dominio o dominios pueden acceder a mi API
        res.header("Access-Control-Allow-Origin", "*")
        // Access-Control-Allow-Headers => sirve para indicar que tipos de cabeceras me puede mandar el front
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
      // Access-Control-Allow-Methods => sirve para indicar que metodos pueden acceder a mi API
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
      // si todo cumple con lo solicitado pasara al siguiente controlador
        next();
        })
    }
    rutas(){
        this.app.get("/", (req, res) => {
            res.json({
                message: "Bienvenido a mi API 😎"
            })
        })
        this.app.use(categoria_router)
        this.app.use(proyectos_router)
        this.app.use(mensaje_habi_router)
        this.app.use(mensaje_mobi_router)
        this.app.use(usuario_router)
    }
    start(){
        this.app.listen( this.port , async () => {
            try {
                let respuesta = await conexion.sync()
                // console.log(respuesta.config);
                // console.log(respuesta)
            } catch (err) {
                console.log(err) 
            }
        })
    }
}