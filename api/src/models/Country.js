const { DataTypes, Sequelize } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('country', {
        Id: {
            type: DataTypes.STRING,
            validate: {
                is: /^ [A - Z]{3}$ /,
                isAlpha: true,
                notEmpty: true,
                notNull: true,
                len: [3, 3],
                isUppercase: true,
            },
            allowNull: false,
        },
        flag: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        continet: {
            name: DataTypes.ENUM('America', 'Africa', 'Asia', 'Europa', 'Oceania'),
            allowNull: false,
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sub_region: {
            type: DataTypes.STRING,
            allowNull: false
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
};
