const axios = require(`axios`);

const geoweather = (lag,lng,callback)=>{

        const wethercodeURL = `https://api.darksky.net/forecast/7fa261da4fc6cad0aef6384618ce197e/${lag},${lng}`;
        // console.log(wethercodeURL);
        axios.get(wethercodeURL)
        .then((response)=>{
          if(response.data.status ==="ZERO_RESULTS"){
            throw new Error(`Unable to find that address`);
          }
          else{
            const timezone = response.data.timezone;
            const temperature = response.data.currently.temperature;
            const aptemperature = response.data.currently.apparentTemperature;
            const visibility = response.data.currently.visibility;
            const year = new Date().getFullYear();
            const month = new Date().getMonth()+1;
            const day = new Date().getDate();
            const hour = new Date().getHours();
            const min = new Date().getMinutes();
            const sec = new Date().getSeconds();
            console.log(`Your Time zone is ${timezone}`);
            console.log( `The temperature is ${temperature},and it feels like ${aptemperature}`);
            console.log(`The visibility is ${visibility}`);
            console.log(`The current date is ${month}/${day}/${year},the time is ${hour}:${min}:${sec}`);
            console.log("┻━┻ミ＼(≧ﾛ≦＼)");
            // console.log(`The weather is ${icon}`);
              }
        })
//
//       })

  }
module.exports = {
  geoweather
}
