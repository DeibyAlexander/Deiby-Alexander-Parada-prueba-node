import {Router} from "express"
import { getUserDirections } from "../controllers/direcciones.controllers.js"

const router = Router()

router.get("/api/user_dirreciones", getUserDirections)


export default router;