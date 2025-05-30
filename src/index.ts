import express from 'express';
import cors from 'cors';
import rotasTransacoes from './routes/clientes.routes';
import './config/conect';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/conta', rotasTransacoes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
