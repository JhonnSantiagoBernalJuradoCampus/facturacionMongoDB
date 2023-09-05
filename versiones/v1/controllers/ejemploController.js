import { connectionDB } from "../../../db/conecct.js"

const dataBase = await connectionDB();
const collection = dataBase.collection("Medicamentos")

const getUser = async (req,res)=>{
    const result = await collection.find().toArray();
    res.send(result);
};
export {getUser}