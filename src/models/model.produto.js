import { con } from "../config/database.js";


class ProdutoModel {

    static getAllProdutos(callBack) {
        let sql = `select * from produto`;

        con.query(sql, function (err, result) {
            if (err)
                callBack(err, null);
            else
                callBack(null, result);
        })
    }

    static createProduto(nome, descricao, preco, foto, callBack) {
        let sql = `insert into produto (nome, descricao, preco, foto) values (?, ?, ?, ?)`;
        con.query(sql, [nome, descricao, preco, foto], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }


    static editProduto(id, nome, descricao, preco, foto, callBack) {
        let sql = `update produto set nome=?, descricao=?, preco=?, foto=? where id_produto=?`;

        con.query(sql, [nome, descricao, preco, foto, id], function (err, result) {
            if (err)
                callBack(err, null)
            else
                callBack(null, result)
        })
    }

    static removeProduto(id, callBack){
        let sql = `delete from produto where id_produto=?`;

        con.query(sql, [id], function(err, result){
            if (err)
                callBack(err, null)
            else
            callBack(null, result)
        })
    }


}

export default ProdutoModel