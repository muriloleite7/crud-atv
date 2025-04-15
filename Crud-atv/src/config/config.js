const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "User1", // Nome do banco
    "root", // Usuário do banco
    "root", // Senha do banco
    {
        host: "localhost", // Host do banco
        port: 3306, // MySQL
        dialect: "mysql",
        logging: false      
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso MYSQL")
    })
    .catch((err) => {
        console.error("Nao foi possivel se conectar MySQL")
    })

module.exports = sequelize;