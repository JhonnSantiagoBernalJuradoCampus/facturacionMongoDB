import { Router } from "express";
import { getTotalDinero, getVentasMedicamento } from "../controllers/ventasController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appVentas = Router();

appVentas.get("/medicamento", validatePermisos("get"), getVentasMedicamento);
appVentas.get("/dinero", validatePermisos("get"), getTotalDinero);

export default appVentas;