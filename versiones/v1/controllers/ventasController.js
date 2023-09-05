import { connectionDB } from "../../../db/conecct.js";

const db = await connectionDB();
const collection = db.collection("Ventas");

const getVentasMedicamento = async (req,res)=>{
    const result = await collection.find({nombre_med: {$eq: "Paracetamol"}}).count();
    res.send({"Cantidad": result})
};

const getTotalDinero = async (req,res)=>{
    const result = await collection.aggregate([
        {
            $lookup: {
                from: "Medicamentos",
                localField: "nombre_med",
                foreignField: "med_nombre",
                as: "med"
            }
        },
        {
            $match: {
                "med": {$ne: []}
            }
        },
        {
            $unwind: "$med"
        },
        {
            $group: {
                _id: "$med.med_id",
                nombre_med: { $first: "$nombre_med"},
                cantidad: { $sum: "$cantidad"},
                precio: {$first: "$med.precio"},
                recuado:{$sum: {$multiply: ["$cantidad", "$med.precio"]}}
            }
        }
    ]).toArray();
    res.send(result);
}

export {getVentasMedicamento, getTotalDinero};