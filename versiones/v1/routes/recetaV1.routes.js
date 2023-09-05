import { Router } from "express";
import { getRecetaEnero } from "../controllers/recetasController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appReceta = Router();

appReceta.get("/enero", validatePermisos("get"), getRecetaEnero);

export default appReceta;