import { connectionDB } from "../../../db/conecct.js";

const db = await connectionDB();
const collection = db.collection("Proveedores");

const getProveedorContacto = async (req,res)=>{
    const result = await collection.aggregate([
        {
             $lookup: {
               from: "Medicamentos",
               localField: "prov_nombre",
               foreignField: "contacto_proveedor",
               as: "Info"
             }
         },
         {
             $match: { "Info": {$ne: []}}
         },
         {
             $project: {
                 "_id": 0,
                 "prov_id": 1,
                 "prov_nombre": 1,
                 "Info.med_nombre": 1,
                 "Info.contacto_proveedor": 1
             }
         }
     ]).toArray();
    res.send(result);
};

const getProveedorVendido = async (req,res)=>{
    const result = await collection.aggregate([
        {
            $lookup: {
              from: "Ventas",
              localField: "prov_nombre",
              foreignField: "nombre_prov",
              as: "Ventas"
            }
        },
        {
            $match: {
                "Ventas": {$ne: []}
            }
        },
        {
            $project: {
                "_id": 1,
                "prov_id": 1,
                "prov_nombre": 1,
                "Ventas.cantidad": 1
            }
        },
        {
            $unwind: "$Ventas"
        },
        {
            $group: {
                _id: "$prov_id",
                prov_nombre: { $first: "$prov_nombre"},
                Ventas: { $sum: "$Ventas.cantidad"}
            }
        }
    ]).toArray();
    res.send(result);
};

const getCantidadMedicamento = async (req,res)=>{
    const result = await collection.aggregate([
        {
            $lookup: {
            from: "Medicamentos",
            localField: "prov_nombre",
            foreignField: "contacto_proveedor",
            as: "Meds"
            }
        },
        {
            $match: {
                "Meds": {$ne: []}
            }
        },
        {
            $unwind: "$Meds"
        },
        {
            $group: {
              _id: "$Meds.med_id",
              "proveedor": {$first: "$Meds.contacto_proveedor"},
              "medicamentos": {$sum: 1}
            }
        }
    ]).toArray()
    res.send(result);
};

export {getProveedorContacto, getProveedorVendido, getCantidadMedicamento};