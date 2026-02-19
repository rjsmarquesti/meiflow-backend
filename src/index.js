import express from "express";
import cors from "cors";

const app = express();

// libera acesso externo (CORS)
app.use(cors());

// permite JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MEI-Flow API está funcionando");
});

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});
