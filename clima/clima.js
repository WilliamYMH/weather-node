const axios=require("axios");

const getClima= async(lat, lng)=>{
    
    let resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c34b0077120beaed48869bd55835f203`);
    if(resp.data.cod!=200){
        throw new Error("No se pudo procesar la solicitud de la temperatura");
    }

    return resp.data.main.temp;
      
    
}

module.exports={
    getClima
}