import {Router} from "express"
import { postProductos } from "../controllers/productos.controllers.js";

const router = Router()

router.post("/api/productos", postProductos)


export default router;