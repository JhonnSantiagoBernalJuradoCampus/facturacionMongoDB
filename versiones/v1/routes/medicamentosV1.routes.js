import { Router } from "express";
import { getUser } from "../controllers/medicamentosController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appEjemplo = Router();

appEjemplo.get("/menor50",validatePermisos("xd"), getUser)

export default appEjemplo;