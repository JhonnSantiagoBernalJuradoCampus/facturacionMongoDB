import {Router} from "express";
import { loginToken } from "../controllers/loginController.js";
import { generateToken } from "../../../config/jwt.js";

const appLogin = Router();

appLogin.use(generateToken,loginToken)


export default appLogin;