const { DataTypes, Sequelize } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Country', {
        //Obligatorio
        ID: {
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
        //Obligatorio
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        //Obligatorio
        flag: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
            allowNull: false,
            unique: true
        },
        //Obligatorio
        continent: {
            type: DataTypes.ENUM('America', 'Africa', 'Asia', 'Europa', 'Oceania'),
            allowNull: false,
        },
        //Obligatorio
        capital: {
            type: DataTypes.STRING,
            allowNu: true
        },
        //Opcional
        sub_region: {
            type: DataTypes.STRING,
            allowNull: true
        },
        //Opcional
        area: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        //Opcional
        population: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //Distición entre la Api y DB
        createInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });
};
