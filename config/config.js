import dotenv from "dotenv";
dotenv.config();

const serverConfig = JSON.parse(process.env.MY_CONFIG);
export {serverConfig};