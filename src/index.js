import {} from "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import routeProduto from './routes/route.produtos.js';
import routePedido from './routes/route.pedidos.js';

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.use(routeProduto)
app.use(routePedido)


//levanta o server
app.listen(process.env.PORT, function(){
    console.log('Servidor executando na porta 3001')
})
