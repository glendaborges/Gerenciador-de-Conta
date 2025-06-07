import express from 'express';
import cors from 'cors';
import rotasTransacoes from './routes/transaction.routes';
import './config/conect';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/conta', rotasTransacoes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
