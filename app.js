import express from "express";
import { serverConfig } from "./config/config.js";
import routesVersioning from "express-routes-versioning";
import RoutesV1 from "./versiones/v1/index.js";

const app = express();
app.use(express.json());

const version = routesVersioning();

app.use(version({
    "1.0.0": RoutesV1
}));

app.listen(serverConfig, ()=>{
    console.log(`http://${serverConfig.hostname}:${serverConfig.port}`);
});