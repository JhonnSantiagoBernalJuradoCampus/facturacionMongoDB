import { Router } from "express";
import { getGananciaProveedor, getMasVentas, getMedicamentoMarzo, getMenosVendido, getPromedioMedicamento, getSinVentas, getTotalDinero, getVentasAño, getVentasMedicamento } from "../controllers/ventasController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appVentas = Router();

appVentas.get("/medicamento", validatePermisos("get"), getVentasMedicamento);
appVentas.get("/dinero", validatePermisos("get"), getTotalDinero);
appVentas.get("/sinVentas", validatePermisos("get"), getSinVentas);
appVentas.get("/marzo", validatePermisos("get"), getMedicamentoMarzo);
appVentas.get("/menosVendido", validatePermisos("get"), getMenosVendido);
appVentas.get("/ganancia", validatePermisos("get"), getGananciaProveedor);
appVentas.get("/promedio", validatePermisos("get"), getPromedioMedicamento);
appVentas.get("/anio", validatePermisos("get"), getVentasAño);
appVentas.get("/mas", validatePermisos("get"), getMasVentas);

export default appVentas;