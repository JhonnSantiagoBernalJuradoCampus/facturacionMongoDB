import { Router } from "express";
import { getUser } from "../controllers/ejemploController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appEjemplo = Router();

appEjemplo.get("/",validatePermisos("xd"), getUser)

export default appEjemplo;