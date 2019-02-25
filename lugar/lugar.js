const axios = require("axios");

const getLugarLatLng = async direccion => {
    
  let encodedUrl =  encodeURI(direccion);  
  let resp =await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=f1a4b6d764524893a27ef0a2a7f435bd&language=es&pretty=1`);

  if(resp.data.results.length==0){
      throw new Error("No hay resultados para la ciudad "+ direccion);
  }

    return {   
        direccion: resp.data.results[0].formatted,
        latitud: resp.data.results[0].geometry.lat,
        longitud: resp.data.results[0].geometry.lng
    }

};

module.exports={
    getLugarLatLng
}
