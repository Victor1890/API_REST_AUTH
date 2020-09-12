import express from "express";
import morgan from "morgan";

import { createRoles } from "./libs/initialSetup";

//import routers
import Products from "./routes/products.routes";
import Auth from "./routes/auth.routes";

const app = express();

createRoles();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products", Products);
app.use("/api/auth", Auth);

export default app;
