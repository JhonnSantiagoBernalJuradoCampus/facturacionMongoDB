import { Router } from "express";
import { getCaduca, getMedicamentosMenor50,getCompradosProveedor } from "../controllers/medicamentosController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appMedicamento = Router();

appMedicamento.get("/menor50",validatePermisos("get"), getMedicamentosMenor50);
appMedicamento.get("/comprados", validatePermisos("get"), getCompradosProveedor);
appMedicamento.get("/caduca", validatePermisos("get"), getCaduca);

export default appMedicamento;