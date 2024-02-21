import app from "./app.js";


const main = ()=>{

    app.listen(app.get("port"))

    console.log(`Port: ${app.get("port")}`);
};


main()