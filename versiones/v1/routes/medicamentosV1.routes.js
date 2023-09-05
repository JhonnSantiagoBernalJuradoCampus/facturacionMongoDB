import { Router } from "express";
import { getMedicamentosMenor50 } from "../controllers/medicamentosController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appMedicamento = Router();

appMedicamento.get("/menor50",validatePermisos("xd"), getMedicamentosMenor50)

export default appMedicamento;