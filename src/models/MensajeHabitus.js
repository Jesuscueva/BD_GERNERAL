const { DataTypes } = require("sequelize")
const { conexion } = require("../config/Sequelize")

module.exports = mensajeHbts_model = () => {
    return conexion.define(
        "mensajeHabitus",
        {
            mensaHbtId: {
                type: DataTypes.INTEGER,
                field: "mensajeHbts_id",
                allowNull: false,
                autoIncrement: true,
                unique:true,
                primaryKey: true,
            },
            mensaHbtNombre: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: "mensajeHbts_nom",
            },
            mensaHbtMail: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "mensajeHbts_mail",
            },
            mensaHbtTel: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "mensajeHbts_tel",
            },
            mensaHbtEmpre: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: "mensajeHbts_empre",
            },
            mensaHbtMensaje: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: "mensajeHbts_mensaje",
            },
            mensajeHbtFecha: {
                type: DataTypes.DATE,
                field: "mensajeHbts_fecha",
                defaultValue: DataTypes.NOW
            }
        },
        {
            timestamps: false,
            tableName: "t_mensajeHabitus"
        }
    )
}
