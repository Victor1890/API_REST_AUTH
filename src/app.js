import express from "express";
const app = express();
import morgan from "morgan";

//import routers
import Products from "./routes/products.routes";
import Auth from "./routes/auth.routes";

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products", Products);
app.use("/api/auth", Auth);

export default app;
