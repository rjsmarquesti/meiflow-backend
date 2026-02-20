import express from "express";
import pool from "./db.js";

const app = express();
app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("MEI-Flow API está funcionando");
});

// healthcheck COM DB
app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.status(200).json({
      status: "ok",
      db: "connected",
      service: "MEI-Flow API",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      db: "disconnected",
      error: err.message,
    });
  }
});

// ⚠️ OBRIGATÓRIO no EasyPanel
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
