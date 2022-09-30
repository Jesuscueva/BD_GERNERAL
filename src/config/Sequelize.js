const {Sequelize} = require("sequelize")

const conexion = new Sequelize(
    "bdempresas",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql",
        timezone: "-05:00",
        logging: false,
        dialectOptions: {
            // useUTC: false,
            dateStrings: true,
        },
    }
)

module.exports = {
    conexion
}