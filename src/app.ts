import cors from "cors";
import path from "path";
import express from "express";

import { Router } from "./routes";

const app = express();
const base_uri = process.env.BASE_URI!;

app.use(cors());
app.use(morgan("combined"));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false, limit: "100mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.use(base_uri, Router);

app.use((_req: any, res: any, _next: any) => {
  return res.status(404).json({
    message: "This path is not available..",
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
