import PedidoModel from "../models/model.pedido.js";

class PedidoController {

    static getAllPedido(req, res) {
        try {
            PedidoModel.getAllPedido(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: "Ocorreu um erro ao buscar os pedidos." });
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

    static createPedido(req, res) {
        const p = req.body;
        const Pedido = p.id_Pedido;
        const nome = p.nome;
        const email = p.email;
        const fone = p.fone;
        const logradouro = p.end_logradouro;
        const numero = p.end_numero;
        const bairro = p.end_bairro;
        const cidade = p.end_cidade;
        const uf = p.end_uf;
        const cep = p.end_cep;
        const total = p.total;

        try {
            PedidoModel.createPedido(Pedido, nome, email, fone, logradouro, numero, bairro, cidade, uf, cep, total, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar pedido: ', err);
                    return res.status(500).json({ error: "Ocorreu um erro ao cadastrar o pedido." });
                }

                return res.status(201).json({
                    message: "Pedido inserido com sucesso",
                    data: {
                        id: result.insertId,
                        Pedido,
                        nome,
                        email,
                        fone,
                        logradouro,
                        bairro,
                        cidade,
                        uf,
                        cep,
                        total,
                    }
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }

    static editPedido(req, res) {
        const id = req.params.id;
        const p = req.body;
        const nome = p.nome;
        const email = p.email;
        const fone = p.fone;
        const logradouro = p.end_logradouro;
        const numero = p.end_numero;
        const bairro = p.end_bairro;
        const cidade = p.end_cidade;
        const uf = p.end_uf;
        const cep = p.end_cep;
        const total = p.total;

        try {
            PedidoModel.editPedido(id, nome, email, fone, logradouro, numero, bairro, cidade, uf, cep, total, function (err, result) {
                if (err) {
                    console.error("Erro ao editar o Pedido", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao editar o Pedido." });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: "Pedido não encontrado." });
                }

                return res.status(200).json({
                    message: "Pedido editado com sucesso",
                    data: {
                        id, nome, email, fone, logradouro, numero, bairro, cidade, uf, cep, total
                    }
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }

    }

    static removePedido(req, res) {
        let id = req.params.id;

        try {
            PedidoModel.removePedido(id, function (err, result) {
                if (err) {
                    console.error("Erro ao deletar Pedido: ", err);
                    return res.status(500).json({ error: "Ocorreu um erro ao deletar o Pedido" });
                }

                if (result.affectedRows === 0) {
                    return (404).json({ message: "Pedido não encontrado" })
                }

                return res.status(200).json({ message: "Pedido deletado com sucesso.", data: { id } });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro interno do servidor." });
        }
    }
}

export default PedidoController;