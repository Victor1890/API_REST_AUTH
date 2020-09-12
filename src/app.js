import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { createRoles } from "./libs/initialSetup";

//import routers
import Products from "./routes/products.routes";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";

const app = express();

createRoles();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/products", Products);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

export default app;
