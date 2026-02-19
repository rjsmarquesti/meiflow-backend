import express from "express";
import cors from "cors";

const app = express();

/**
 * Middlewares
 */
app.use(cors({
  origin: "*", // depois podemos restringir
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

/**
 * Rotas
 */
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "MEI-Flow API está funcionando 🚀"
  });
});

/**
 * Porta dinâmica (IMPORTANTE para EasyPanel)
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
