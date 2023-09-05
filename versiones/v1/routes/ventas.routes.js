import { Router } from "express";
import { getMedicamentoMarzo, getMenosVendido, getSinVentas, getTotalDinero, getVentasMedicamento } from "../controllers/ventasController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appVentas = Router();

appVentas.get("/medicamento", validatePermisos("get"), getVentasMedicamento);
appVentas.get("/dinero", validatePermisos("get"), getTotalDinero);
appVentas.get("/sinVentas", validatePermisos("get"), getSinVentas);
appVentas.get("/marzo", validatePermisos("get"), getMedicamentoMarzo);
appVentas.get("/menosVendido", validatePermisos("get"), getMenosVendido);

export default appVentas;