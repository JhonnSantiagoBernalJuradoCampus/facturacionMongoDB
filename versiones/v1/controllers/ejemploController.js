import { connectionDB } from "../../../db/conecct.js"

const dataBase = await connectionDB();
const collection = dataBase.collection("user")

const getUser = async (req,res)=>{
    const result = await collection.find().toArray();
    res.send(result);
};
export {getUser}