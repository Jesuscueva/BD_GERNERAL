const { DataTypes } = require("sequelize")
const { conexion  } = require("../config/Sequelize")

module.exports = categoria_model = () => {
    return conexion.define(
        "categorias",
        {
            categoriaId:{
                type:          DataTypes.INTEGER,
                allowNull:     false,
                field:         "cat_id",
                primaryKey:    true,
                unique:        true,
                autoIncrement: true,
            },
            categoriaNombre:{
                type:      DataTypes.STRING(45),
                field:     "cat_nom",
                allowNull: false,
                unique:    true, 
            },
        },
        {
            tableName: "t_categoria",
            timestamps: false,
        }
    )
}