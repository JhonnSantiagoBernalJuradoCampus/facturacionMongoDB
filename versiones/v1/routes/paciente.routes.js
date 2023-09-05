import { Router } from "express";
import { getPacienteMedicamento } from "../controllers/pacienteController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appPaciente = Router();

appPaciente.get("/compra", validatePermisos("get"), getPacienteMedicamento);

export default appPaciente;