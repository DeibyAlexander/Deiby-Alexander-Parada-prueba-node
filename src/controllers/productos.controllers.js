import getConnection from "../db/database.js";


const postProductos = async (req, res)=>{
    try {
        const {nombre,barcode,presentacion} = req.body;

        const producto ={ nombre, barcode, presentacion};

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos SET ?", producto);

        res.json(result);

    } catch (error) {
        console.log(error.message);
    }
}


export {
    postProductos
}
