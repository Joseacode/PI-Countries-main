const { DataTypes, Sequelize } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('t_activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            },
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seasons: {
            type: DataTypes.ENUM,
            value: ['Summer', 'Winter', 'Autumn', 'Spring'],
            allowNull: false
        }
    })
}
     