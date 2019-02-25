const argv = require("yargs").options(
    {
        direccion:{
            alias:"d",
            desc: "lugar para obtener el clima",
            demand:true
        }
    }
).argv;

module.exports={
    argv
};