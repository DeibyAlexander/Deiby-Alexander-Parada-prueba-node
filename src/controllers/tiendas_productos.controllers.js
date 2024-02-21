import getConnection from "../db/database.js";


const postTiendasProductos = async (req, res)=>{
    try {
        const {id_producto, id_tienda,valor,compra_maxima} = req.body;

        const tiendaProducto ={ id_producto, id_tienda, valor, compra_maxima};

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tiendas_productos SET ?", tiendaProducto);

        res.json({result});

    } catch (error) {
        console.log(error.message);
    }
}


export {
    postTiendasProductos
}
