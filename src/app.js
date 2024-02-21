import express from "express";
import direccionesRouter from "./routes/direcciones.routes.js";
import { postProductos } from "./controllers/productos.controllers.js";
import { postTiendasProductos } from "./controllers/tiendas_productos.controllers.js";

const app = express();

app.set("port", 4000);



//* Routes

app.use(direccionesRouter, postProductos, postTiendasProductos)


export default app;