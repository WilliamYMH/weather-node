const { argv } = require("./config/yargs");
const { getLugarLatLng } = require("./lugar/lugar");
const { getClima } = require("./clima/clima");


let getInfo=async(direccion)=>{

    try{
        let coord=await getLugarLatLng(direccion);
        let temp=await getClima(coord.latitud, coord.longitud);
        return "El clima en "+coord.direccion+" es de: "+temp+" °C";
    }catch(e){
        return "No se pudo determinar el clima en "+direccion;
    }

};

getInfo(argv.direccion).then(msj=>console.log(msj)).catch(e=>console.log(e));

  