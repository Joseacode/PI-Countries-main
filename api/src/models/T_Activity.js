const { DataTypes, UUID} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('T_Activity', {
        ID: {
            type: UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
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
            type: DataTypes.ENUM('Summer', 'Winter', 'Autumn', 'Spring'),
            allowNull: false
        }
    })
}
     