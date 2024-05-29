import UsuarioModel from "../models/model.usuario.js";

class UsuarioController {

    static getAllUsuarios(req, res) {
        try {
            UsuarioModel.getAllUsuarios(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Ocorreu um erro ao buscar os Usuarios." });
                }

                if (!result[0]) {
                    return res.status(404).json({ message: "Não foram encontrados usuários." });
                }

                return res.status(200).json(result);
            });

        } catch (error) {
            // Captura qualquer exceção não tratada
            console.error(error);
            // Retorna uma resposta de erro 500
            res.status(500).json({ error: "Erro Interno no servidor." });
        }
    }

    static createUsuario(req, res) {
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        const senha = p.senha;

        try {
            UsuarioModel.createUsuario(nome, email, senha, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar usuario: ', err);
                    return res.status(500).json({ error: "Ocorreu um erro ao cadastrar o usuário." });
                }

                return res.status(201).json({
                    message: "Usuário inserido com sucesso",
                    data: {
                        id: result.insertId,
                        nome,
                        email
                    }
                });
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }

}

export default UsuarioController;