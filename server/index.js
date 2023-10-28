import express from "express";
import cors from "cors";

import serverRoutes from "./routes/servises.js";

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(serverRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен и работает на порте ${PORT}`);
});
