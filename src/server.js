import express from "express";
import http from "http";
import router from "./router.js";
import { errorHandlingMiddleware, loggingMiddleware } from "./middleware.js";

const app = express();

app.use("/public", express.static("./src/public"));
app.use("/", express.static("./node_modules"));
app.use("/", loggingMiddleware, router);

app.use(errorHandlingMiddleware);

const server = http.createServer(app);

server.listen(8000);
