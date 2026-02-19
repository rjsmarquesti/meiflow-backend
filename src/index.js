import express from "express";

const app = express();
app.use(express.json());

// rota de teste
app.get("/", (req, res) => {
  res.send("MEI-Flow API está funcionando");
});

// PORTA DINÂMICA (obrigatório no EasyPanel)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

import express from "express";

const app = express();
app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("MEI-Flow API está funcionando");
});

// rota de healthcheck
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "MEI-Flow API",
    timestamp: new Date().toISOString()
  });
});

// porta dinâmica
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

