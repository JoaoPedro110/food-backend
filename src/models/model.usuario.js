import { con } from "../config/database.js";

class UsuarioModel {

    // Método para obter todos os usuários
    static getAllUsuarios(callback) {
        let sql = `select * from usuario`;

        con.query(sql, function(err, result){
            if (err)
                callback(err, null);
            else 
                callback(null, result)
        });
    }

}

export default UsuarioModel;