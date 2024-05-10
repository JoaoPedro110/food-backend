import express from 'express';
import cors from 'cors';
import routeProduto from './routes/routes.produtos.js';
import routePedido from './routes/routes.pedidos.js';

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.use(routeProduto)
app.use(routePedido)


//levanta o server
app.listen(3001, function(){
    console.log('Servidor executando na porta 3001')
})
