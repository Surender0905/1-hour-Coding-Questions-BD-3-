import express from "express";
import routes from "./routes/index.js";

const app = express();

//middlewares
app.use(express.json());

///health check
app.get("/", (req, res) => {
    res.send("OK");
});

//routes
app.use("/", routes);

export default app;
