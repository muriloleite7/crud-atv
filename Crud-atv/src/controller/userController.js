const User = require("../model/user")
 
const userController = {
    create: async (request, response) => {
        try {
 
            const { email, nome, senha } = request.body
 
            const userCriado = await User.create({ email, nome, senha })
 
            return response.status(200).json({
                msg: 'O User foi criado com sucesso',
                userCriado
            })
 
        } catch (error) {
            console.log(error)
 
            return response.status(500).json({
                msg: 'Ocorreu um erro ao acessar a api'
            })
        }
    },
    update: async (request, response) => {
        try {
            const { id } = request.params
            const { email, nome, senha } = request.body
 
            if (!email || !nome || !senha) {
                return response.status(400).json({
                    msg: "Campos faltando"
                })
            }
 
            const userExiste = await User.findByPk(id)
 
            if (!userExiste) {
                return response.status(400).json({
                    msg: "User não encontrado"
                })
            }
 
            await User.update({
                email, nome, senha
            }, {
                where: {
                    id: id
                }
            })
 
            return response.status(200).json({
                msg: "User atualizado com sucesso"
            })
 
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: "Ocorreu um erro ao atualizar o User"
            })
 
        }
    },
    findAll: async (request, response) => {
        try {
            const user = await User.findAll()
 
            return response.status(200).json(user)
 
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar todos os user"
            })
        }
    },
    delete: async (request, response) => {
        try {
 
            const { id } = request.params
 
            const existeUser = await User.findByPk(id)
 
            if (!existeUser) {
                return response.status(400).json({
                    msg: "User não foi encontrado"
                })
            }
 
            await User.destroy({
                where: {
                    id: id
                }
            })
 
            return response.status(200).json({
                msg: "User deletado com sucesso!"
            })
 
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao deletar o User"
            })
 
        }
    }
}
module.exports = userController
 