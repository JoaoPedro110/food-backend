import mysql from "mysql2"

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql",
    database: "food"
});

con.connect(function(err){
    if (err) throw err;
    console.log('Conectado ao banco de dados')

});

export {con}


