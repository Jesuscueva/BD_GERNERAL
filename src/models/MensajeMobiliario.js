const { DataTypes } = require("sequelize")
const { conexion } = require("../config/Sequelize")

module.exports = mensajeMobi_model = () => {
    return conexion.define(
        "mensajeMobiliario",
        {
            mensaMobiId: {
                type: DataTypes.INTEGER,
                field: "mensaMobi_id",
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
            },
            mensaMobiNom: {
                type: DataTypes.STRING(255),
                field: "mensaMobi_nombre",
                allowNull: false,
            },
            mensaMobiMail: {
                type: DataTypes.STRING(255),
                field: "mensaMobi_email",
                allowNull: false,
            },
            mensaMobiTel: {
                type: DataTypes.INTEGER,
                validate: {
                    len: [6, 9]
                },
                field: "mensaMobi_telefono",
                allowNull: false,
            },
            mensaMobiEmpre: {
                type: DataTypes.STRING(255),
                field: "mensaMobi_empresa",
                allowNull: false,
            },
            mensaMobiComentario: {
                type: DataTypes.TEXT,
                field: "mensaMobi_comentario",
                allowNull: false,
            },
            mensaMobiFecha: {
                type: DataTypes.DATE,
                field: "mensaMobi_fecha",
                defaultValue: DataTypes.NOW
            }
        },
        {
            timestamps: false,
            tableName: "t_mensajeMobiliaro"
        }
    )
}
