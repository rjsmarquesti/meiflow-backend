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
