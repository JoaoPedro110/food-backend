import { Router } from "express";
import UsuarioController from "../controllers/controller.usuario.js";


const routeUsuario = Router();

routeUsuario.get("/usuarios", UsuarioController.getAllUsuarios);
routeUsuario.post("/usuarios", UsuarioController.createUsuario);
routeUsuario.put("/usuarios/:id", UsuarioController.editUsuario);


export default routeUsuario;