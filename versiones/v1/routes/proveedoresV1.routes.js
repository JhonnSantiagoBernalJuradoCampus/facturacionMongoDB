import { Router } from "express";
import { getCantidadMedicamento, getProveedorContacto, getProveedorVendido } from "../controllers/proveedoresController.js";
import { validatePermisos } from "../../../helpers/validatePermisos.js";

const appProveedor = Router();

appProveedor.get("/contacto",validatePermisos("get"), getProveedorContacto);
appProveedor.get("/vendido", validatePermisos("get"), getProveedorVendido);
appProveedor.get("/cantidad", validatePermisos("get"), getCantidadMedicamento);

export default appProveedor;