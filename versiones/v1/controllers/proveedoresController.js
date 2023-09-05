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

export {getProveedorContacto}