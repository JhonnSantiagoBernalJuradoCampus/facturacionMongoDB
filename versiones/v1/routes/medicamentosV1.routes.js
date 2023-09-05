import { Router } from "express";
import { getMedicamentosMenor50 } from "../controllers/medicamentosController.js";
import { getCompradosProveedor } from "../controllers/medicamentosController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appMedicamento = Router();

appMedicamento.get("/menor50",validatePermisos("get"), getMedicamentosMenor50);
appMedicamento.get("/comprados", validatePermisos("get"), getCompradosProveedor);

export default appMedicamento;