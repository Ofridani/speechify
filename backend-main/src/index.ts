import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/test', (req: Request, res: Response) => {
  res.json({ msg: "Backend is alive!" });
});

app.listen(3000, () => console.log("Server running on 3000"));