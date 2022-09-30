const { DataTypes } = require("sequelize")
const { conexion  } = require("../config/Sequelize")

module.exports = proyectos_model = () => {
    return conexion.define(
        "proyectos",
        {
            proyectoId:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                unique: true,
                field: "proyec_id",
            },
            proyectoName:{
                type: DataTypes.STRING(45),
                allowNull: false,
                field: "proyec_nom",
            },
            proyectoCliente:{
                type: DataTypes.STRING(45),
                allowNull: false,
                field: "proyec_cliente",
            },
            proyectoFecha:{
                type: DataTypes.STRING(45),
                allowNull: false,
                field: "proyec_fecha",
            },
            proyectoImagen:{
                type: DataTypes.TEXT,
                allowNull: false,
                field: "proyec_img",
            },
        },
        {
            timestamps: false,
            tableName: "t_proyectos"
        }
    )
}