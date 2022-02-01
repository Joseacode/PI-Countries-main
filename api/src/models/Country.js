const { DataTypes, Sequelize } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Country', {
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
            unique: true,
            allowNull: false,
            primaryKey: true,
        },
        flag: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        continent: {
            type: DataTypes.ENUM('America', 'Africa', 'Asia', 'Europa', 'Oceania'),
            allowNull: false,
        },
        capital: {
            type: DataTypes.STRING,
            allowNu: true
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
        },
        
    });
};
