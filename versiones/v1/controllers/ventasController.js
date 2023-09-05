import { connectionDB } from "../../../db/conecct.js";

const db = await connectionDB();
const collection = db.collection("Ventas");

const getVentasMedicamento = async (req,res)=>{
    const result = await collection.find({nombre_med: {$eq: "Paracetamol"}}).count();
    res.send({"Cantidad": result})
};

export {getVentasMedicamento};