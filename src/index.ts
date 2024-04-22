import dotenv from "dotenv";
dotenv.config();

import express, { Express, Response, Request, NextFunction } from 'express';
import cors from "cors";
import proxyRoutes from './routes/proxyRoutes.js'

const app: Express = express();
const port: number = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/movies', proxyRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).send({
    message: err.message || 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});