import getConnection from "../db/database.js";



const getUserDirections = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, direccion, distancia, id_user FROM users_direcciones")
        console.log(result);
        res.json(result)
        console.log("hola");

    } catch (error) {
        console.log(error.message);
    }

}

export {
    getUserDirections
}