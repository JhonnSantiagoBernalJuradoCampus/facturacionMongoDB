import { Router } from "express";
import { getProveedorContacto, getProveedorVendido } from "../controllers/proveedoresController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appProveedor = Router();

appProveedor.get("/contacto",validatePermisos("get"), getProveedorContacto);
appProveedor.get("/vendido", validatePermisos("get"), getProveedorVendido);

export default appProveedor;