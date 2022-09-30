const { DataTypes } = require("sequelize")
const { conexion } = require("../config/Sequelize")

module.exports = servicios_model = () => {
    return conexion.define(
        "servicios",
        {
            servicioId: {
                type: DataTypes.INTEGER,
                field: "servi_id",
                allowNull: false,
                autoIncrement: true,
                unique: true,
                primaryKey: true,
            },
            servicioTitle: {
                type: DataTypes.TEXT,
                field: "servi_title",
                allowNull: false,
            },
            servicioDescripcion: {
                type: DataTypes.TEXT,
                field: "servi_descripcion",
                allowNull: false,
            },
            servicioImg: {
                type: DataTypes.TEXT,
                field: "servi_img",
                allowNull: false
            }
        },
        {
            timestamps: false,
            tableName: "t_servicios"
        }
    )
}