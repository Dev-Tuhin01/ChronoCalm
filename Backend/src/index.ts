import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 4000;

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}/`);
});
