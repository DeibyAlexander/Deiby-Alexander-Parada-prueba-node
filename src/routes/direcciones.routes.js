import {Router} from "express"
import { getUserDirections } from "../controllers/direcciones.controllers.js"

const router = Router()

router.get("/api/direcciones", getUserDirections)


export default router;