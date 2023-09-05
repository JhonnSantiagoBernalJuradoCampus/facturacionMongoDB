import { connectionDB } from "../../../db/conecct.js"

const dataBase = await connectionDB();
const collection = dataBase.collection("Medicamentos")

const getMedicamentosMenor50 = async (req,res)=>{
    const result = await collection.find({stock: {$lt: 50}}).toArray();
    res.send(result);
};

const getCompradosProveedor = async (req,res)=>{
    const result = await collection.find({contacto_proveedor: {$eq: "Santiago"}}).toArray();
    res.send(result);
};

const getCaduca = async (req,res)=>{
    const result = await collection.find({"caducidad": {$lt: "2024-01-01"}}).toArray();
    res.send(result);
}

const getNoVendidos = async (req,res)=>{
    const result = await collection.aggregate([
        {
            $lookup: {
              from: "Ventas",
              localField: "med_nombre",
              foreignField: "nombre_med",
              as: "noVendido"
            }
        },
        {
            $match: {
                "noVendido": {$eq: []}
            }
        },
        {
            $project: {
                "noVendido": 0
            }
        }
    ]).toArray();
    res.send(result);
};

export {getMedicamentosMenor50, getCompradosProveedor, getCaduca, getNoVendidos};