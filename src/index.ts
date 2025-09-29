import express, { Request, Response } from "express";
import path from "path";
import router from "./routes";

const app = express();
const PORT = 3001;

app.use(express.json());

// Rota de Teste
app.get("/", (req: Request, res: Response) => {
  res.json({
    time: new Date().getTime(),
  });
});

// handle routes
app.use("/api", router);

// handle public static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
