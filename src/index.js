import express from "express";
import { checkDb } from "./db.js";

const app = express();
app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("MEI-Flow API está funcionando");
});

// healthcheck REAL
app.get("/health", async (req, res) => {
  const db = await checkDb();

  if (db.connected) {
    return res.status(200).json({
      status: "ok",
      db: "connected",
      service: "MEI-Flow API",
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(500).json({
    status: "error",
    db: "disconnected",
    error: db.error,
  });
});

// porta dinâmica (EasyPanel)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
