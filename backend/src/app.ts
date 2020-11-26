import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();
app.use(express.json()); //dizendo que nosso app ira trabalhar com express usando formao json
app.use(cors()); //permite a comunicação do backend com o frontend
app.use(linksRouter);

export default app;


