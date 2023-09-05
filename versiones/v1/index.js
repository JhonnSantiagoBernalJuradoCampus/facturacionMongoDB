import { Router } from "express";
import login from "./routes/loginV1.routes.js";
import medicamentos from "./routes/medicamentosV1.routes.js"
import { verifyToken } from "../../config/jwt.js";

const RoutesV1 = Router();

RoutesV1.use("/login", login);
RoutesV1.use("/medicamentos", verifyToken(), medicamentos);

export default RoutesV1;