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

const getSinVentas = async (req,res) =>{
    const result = await collection.find({ "venta_fecha": {$lt: "2022-09-05"}},{"_id": 0,"nombre_prov": 1}).toArray();
    res.send(result);
};

const getMedicamentoMarzo = async (req,res)=>{
    const result = await collection.find({$and: [{venta_fecha: {$gte: "2023-03-01"}},{venta_fecha: {$lte: "2023-03-31"}}]}).toArray();
    res.send(result);
};

const getMenosVendido = async (req,res)=>{
    const result = await collection.find({$and: [{venta_fecha: {$gte: "2023-01-01"}},{venta_fecha: {$lte: "2023-12-31"}}]},{"nombre_med": 1, "cantidad": 1}).sort({cantidad: 1}).limit(1).toArray();
    res.send(result)
}

export {getVentasMedicamento, getTotalDinero, getSinVentas, getMedicamentoMarzo, getMenosVendido};