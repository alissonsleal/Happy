import "dotenv/config";
import express from "express";
import path from "path";
import "express-async-errors";
import cors from "cors";

import "./database/connection";
import errorHandler from "./errors/handler";

import OrphanageRouter from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(OrphanageRouter);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(process.env.PORT || 3333);
