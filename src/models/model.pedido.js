import { con } from "../config/database.js";

class PedidoModel {

    // Método para obter todos os Pedidos
    static getAllPedido(callback) {
        let sql = `select * from pedido`;

        con.query(sql, function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    // Método para criar um novo Pedido
    static createPedido(id_usuario, nome, email, fone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total, callback) {
        let sql = `insert into pedido(id_usuario, nome, email, fone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        con.query(sql, [id_usuario, nome, email, fone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total], function (err, result) {
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

    // Método para editar um Pedido existente
    static editPedido(id, nome, email, fone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total, callback) { 
        let sql = `update pedido set nome=?, email=?, fone=?, end_logradouro=?, end_numero=?, end_bairro=?, end_cidade=?, end_uf=?, end_cep=?, total=? where id_pedido=?`

        con.query(sql, [nome, email, fone, end_logradouro, end_numero, end_bairro, end_cidade, end_uf, end_cep, total, id], function(err, result){
            if (err)
                callback(err, null);
            else
                callback(null, result);
        });

    }

    // Método para remover um Pedido existente
    static removePedido(id, callback){
        let sql = `delete from pedido where id_pedido=?`;

        con.query(sql, [id], function(err, result){
            if(err)
                callback(err, null);
            else
                callback(null, result);
        });
    }

}

export default PedidoModel;
