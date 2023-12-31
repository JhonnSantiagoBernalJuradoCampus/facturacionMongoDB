import { Router } from "express";
import { verifyToken } from "../../config/jwt.js";
import login from "./routes/loginV1.routes.js";
import medicamentos from "./routes/medicamentosV1.routes.js";
import proveedores from "./routes/proveedoresV1.routes.js";
import receta from "./routes/recetaV1.routes.js";
import venta from "./routes/ventasV1.routes.js";
import paciente from "./routes/paciente.routes.js";

const RoutesV1 = Router();

RoutesV1.use("/login", login);
RoutesV1.use("/medicamentos", verifyToken(), medicamentos);
RoutesV1.use("/proveedor", verifyToken(), proveedores);
RoutesV1.use("/receta", verifyToken(), receta);
RoutesV1.use("/venta", verifyToken(), venta);
RoutesV1.use("/paciente", verifyToken(), paciente);

export default RoutesV1;