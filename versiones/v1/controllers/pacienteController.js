import { connectionDB } from "../../../db/conecct.js";

const db = await connectionDB();
const collection = db.collection("Pacientes");

const getPacienteMedicamento = async (req,res) =>{
    const result = await collection.aggregate([
        {
            $lookup: {
              from: "Ventas",
              localField: "pac_nombre",
              foreignField: "nombre_pac",
              as: "Compra"
            }
        },
        {
            $match: {
                "Compra.nombre_med": "Paracetamol"
            }
        },
        {
            $project: {
                "_id": 0,
                "Compra": 0
            }
        }
    ]).toArray();
    res.send(result);
}

export {getPacienteMedicamento};