import { Router } from "express";
import { getProveedorContacto } from "../controllers/proveedoresController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appProveedor = Router();

appProveedor.get("/contacto",validatePermisos("xd"), getProveedorContacto)

export default appProveedor;