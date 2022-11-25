const Mongoose = require ("mongoose");
const debug = require("debug")("app:mongoose"); 

const dbhost = process.env.DBHOST || "localhost"; 
const dbport = process.env.DBHPORT || "27017"; 
const dbname = process.env.DBNAME || "wdyt-uca"; 
const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`; 

const connect = async() => {
    debug(dburi); 
    try{
        await Mongoose.connect(dburi); 
        debug("Conexión a la base exitosa");
    }catch{
        debug("Error en la conexión a la base"); 
        process.exit(1); 
    }
}

module.exports = {
    connect
}