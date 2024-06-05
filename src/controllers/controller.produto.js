import ProdutoModel from '../models/model.produto.js'

class ProdutoController {
    static getAllProdutos(req, res) {
        try {
            ProdutoModel.getAllProdutos(function (err, result) {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao buscar os produtos.' })
                }
                return res.status(200).json(result)
            })
        } catch (error) {
            //captura qualquer exceção n tratada
            console.error(error);
            //retorna uma resposta de erro 500
            res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }

    static createProduto(req, res) {
        const p = req.body;
        const nome = p.nome;
        const descricao = p.descricao;
        const foto = p.foto;
        const preco = p.preco;
        const total = p.total;

        try {
            ProdutoModel.createProduto(nome, descricao, preco, foto, function (err, result) {
                if (err) {
                    console.error('Erro ao cadastrar produto: ', err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao cadastrar o produto' });
                }
                return res.status(201).json({
                    message: "Produto inserido com sucesso.",
                    data: {
                        nome,
                        descricao

                    }
                });

            });
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Erro nterno do servidor" })
        }
    }

    static editProduto(req, res) {
        const p = req.body;
        const id = req.params.id
        const nome = p.nome;
        const descricao = p.descricao;
        const foto = p.foto;
        const preco = p.preco;
        const total = p.total;

        try {
            ProdutoModel.editProduto(id, nome, descricao, preco, foto, function (err, result) {

                if (err) {
                    console.error("Erro ao editar o produto: ", err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao editar o produto' })
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Produto não encontrado' })
                }

                return res.status(200).json({
                    message: 'Produto editado com sucesso',
                    data: {
                        id, nome, descricao
                    }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor' })
        }
    }

    static removeProduto(req, res) {
        let id = req.params.id;

        try {
            ProdutoModel.removeProduto(id, function (err, result) {
                if (err) {
                    console.error('Erro ao deletar produto: ', err);
                    return res.status(500).json({ error: 'Ocorreu um erro ao deletar o produto.' })
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ mensage: 'Produto não encontrado' })
                }

                return res.status(200).json({
                    mensage: 'Produto deletado com sucesso.',
                    data: { id }
                })
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }
}


export default ProdutoController;