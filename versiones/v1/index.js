import { Router } from "express";
import { verifyToken } from "../../config/jwt.js";
import login from "./routes/loginV1.routes.js";
import medicamentos from "./routes/medicamentosV1.routes.js";
import proveedores from "./routes/proveedoresV1.routes.js";
import receta from "./routes/recetaV1.routes.js"

const RoutesV1 = Router();

RoutesV1.use("/login", login);
RoutesV1.use("/medicamentos", verifyToken(), medicamentos);
RoutesV1.use("/proveedor", verifyToken(), proveedores);
RoutesV1.use("/receta", verifyToken(), receta);

export default RoutesV1;