import express from "express";

const app = express();
app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("MEI-Flow API está funcionando");
});

// rota de healthcheck (ESSA É A CHAVE)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "MEI-Flow API",
    timestamp: new Date().toISOString()
  });
});

// porta dinâmica (OBRIGATÓRIA no EasyPanel)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
