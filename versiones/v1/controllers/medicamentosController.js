import { connectionDB } from "../../../db/conecct.js"

const dataBase = await connectionDB();
const collection = dataBase.collection("Medicamentos")

const getMedicamentosMenor50 = async (req,res)=>{
    const result = await collection.find({stock: {$lt: 50}}).toArray();
    res.send(result);
};
export {getMedicamentosMenor50}