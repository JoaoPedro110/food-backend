import { Router } from "express";
import { con } from "../config/database.js";

const routeProduto = Router();

routeProduto.get("/produtos", function (req, res) {
    con.query('select * from produto', function (err, result) {
        if (err)
            return res.status(500).send("Ocorreu um erro: " + err.message);
        else
            return res.status(200).json(result);
    })
});

export default routeProduto;