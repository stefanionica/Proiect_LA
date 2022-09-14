import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { userRouter } from './routes/userRouter';
import { turneuRouter } from './routes/turneuRouter';
import { biletRouter } from './routes/biletRouter';
import { produsRouter } from './routes/produsRouter';
dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT;
app.use(cors());
app.use("/users", userRouter);
app.use("/turnee", turneuRouter);
app.use("/bilete", biletRouter);
app.use("/produse", produsRouter);
app.get('/', (req: Request, res: Response) => {
  //res.send('Express + TypeScript Server!!!!');
  res.sendFile(path.join(__dirname+'/acasa.html'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});


