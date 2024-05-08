import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

//rotas
app.get('/olamundo', function(req, res){
    res.status(200).send("Olá Mundo!")
})

//levanta o server
app.listen(3001, function(){
    console.log('Servidor executando na porta 3001')
})
