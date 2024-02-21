import {Router} from "express"
import { postTiendasProductos } from "../controllers/tiendas_productos.controllers.js";

const router = Router()

router.post("/api/tienda_producto", postProductos)


export default router;