const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true 
    },
    senha: {
        type: DataTypes.STRING,
        allowNull:false
    }
}, {
    tableName: 'user',
    timestamps: true    
});

module.exports = user