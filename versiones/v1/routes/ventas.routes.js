import { Router } from "express";
import { getVentasMedicamento } from "../controllers/ventasController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appVentas = Router();

appVentas.get("/medicamento", validatePermisos("get"), getVentasMedicamento);

export default appVentas;