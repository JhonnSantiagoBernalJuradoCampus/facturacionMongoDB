import { Router } from "express";
import { getRecetaDoctor, getRecetaEnero } from "../controllers/recetasController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appReceta = Router();

appReceta.get("/enero", validatePermisos("get"), getRecetaEnero);
appReceta.get("/doctor", validatePermisos("get"), getRecetaDoctor);

export default appReceta;