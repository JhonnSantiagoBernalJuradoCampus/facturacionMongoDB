import { connectionDB } from "../../../db/conecct.js";

const db = await connectionDB();
const collection = db.collection("Recetas")
const getRecetaEnero = async(req,res)=>{
    const result = await collection.find({"rec_fecha": {$gt: "2023-01-01"}}).toArray();
    res.send(result);
};

export {getRecetaEnero};