import express from "express";
import apiRoutes from "./api-routes/index.mjs";
import "./helpers/db.mjs";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use("/api", apiRoutes);

app.use(function (err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err.message });
});
app.use((req, res) => {
  res.status(404).json({ msg: "Not found" });
});

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server start: http://localhost:${PORT} `);
});
