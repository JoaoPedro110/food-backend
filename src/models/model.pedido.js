import { query } from "express";
import { con } from "../config/database.js";

class PedidoModel {

    // Método para obter todos os Pedidos
    static getAllPedidos(callback) {
        let sql = `select * from pedido`;

        con.query(sql, function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    // Método para criar um novo Pedido
    static createPedidos(dados, callback) {
        let sql = `insert into pedido(id_usuario, nome, email, fone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        con.query(sql, [dados.id_usuario, dados.nome, dados.email, dados.fone, dados.end_logradouro, dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, dados.end_cep, dados.total], async function (err, result) {
            if (err)
                callback(err, null);
            else {
                let id_pedido = result.insertId;

                for (let item of dados.itens) {
                    sql = `insert into pedido_item(id_pedido, id_produto, quantidade, valor_unitario) values(?,?,?,?)`;

                    await query(sql, [id_pedido, item.id_produto, item.quantidade, item.valor_unitario]);

                }

                callback(null, result);
            }
        });
    }

    // Método para editar um Pedido existente
    static editPedidos(dados, callback) {
        let sql = `update pedido set nome=?, email=?, fone=?, end_logradouro=?, end_numero=?, end_bairro=?, end_cidade=?, end_uf=?, end_cep=?, total=? where id_pedido=?`

        con.query(sql, [dados.nome, dados.email, dados.fone, dados.end_logradouro, dados.end_numero, dados.end_bairro, dados.end_cidade, dados.end_uf, dados.end_cep, dados.total, dados.id
        ], function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });

    }

    // Método para remover um Pedido existente
    static removePedidos(id, callback) {
        let sql = `delete from pedido where id_pedido=?`;

        con.query(sql, [id], function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

}

export default PedidoModel;
