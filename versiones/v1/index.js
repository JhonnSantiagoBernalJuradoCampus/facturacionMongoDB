import { Router } from "express";
import login from "./routes/loginV1.routes.js";
import ejemplo from "./routes/ejemploV1.routes.js"
import { verifyToken } from "../../config/jwt.js";

const RoutesV1 = Router();

RoutesV1.use("/login", login);
RoutesV1.use("/ejemplo", verifyToken(), ejemplo);

export default RoutesV1;