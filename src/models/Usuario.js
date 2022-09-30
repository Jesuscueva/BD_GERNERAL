const { DataTypes } = require("sequelize")
const { conexion  } = require("../config/Sequelize")
const bcrypt        = require("bcrypt")
const { sign}      = require("jsonwebtoken")
const jwt = require('jsonwebtoken');


module.exports = usuario_model = () => {
    let usuario = conexion.define(
        "usuarios",
        {
            usuId: {
                type: DataTypes.INTEGER,
                field: "usu_id",
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                allowNull: false,
            },
            usuNom: {
                type: DataTypes.STRING(45),
                field: "usu_nom",
                allowNull: false,
            },
            usuEmail: {
                type: DataTypes.STRING(100),
                field: "usu_email",
                unique: true,
                validate: {
                    isEmail: true,
                    len: [13, 100],
                }
            },
            usuSuperUser: {
                type: DataTypes.BOOLEAN,
                field: "usu_superuser",
                defaultValue: false,
            },
            usuPassword: {
                type: DataTypes.TEXT,
                field: "usu_password",
                allowNull: false,
            }
        },
        {
            timestamps: false,
            tableName: "t_usuario",
        }
    )

    usuario.prototype.setearPassword = function (password) {
        // encriptamos la contraseña y lo guardamos en la BD
        const hash = bcrypt.hashSync(password, 13)
        this.usuPassword = hash
    }

    usuario.prototype.validatePassword = function (password) {
        // retorno falso o true
        return bcrypt.compareSync(password, this.usuPassword)
    }

    usuario.prototype.generarJWT = function () {
        const payload = {
            usuarioId : this.usuId,
            usuarioEmail : this.usuEmail,
            usuarioName : this.usuNom,
        }
        // console.log(process.env.JWT_SECRET)
        const password = process.env.JWT_SECRET || "password"
        // console.log(password);
        return sign(payload, password, { expiresIn: "2h" }, { algorithm: "RS256" })
    }

    return usuario
}
