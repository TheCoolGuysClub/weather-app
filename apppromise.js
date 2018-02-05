const yargs = require(`yargs`);
const axios = require(`axios`);
const argv = yargs
.options({
  address:{
  demandOption:true,
  alias:'a',
  describe:'Address to fetch'
  }
})
  .help()
  .alias("help","h")
  .argv;
  const encodedAddress = encodeURIComponent(argv.address);
  const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;
  axios.get(geocodeUrl)
    .then((response)=>{
      if(response.data.status ==="ZERO_RESULTS"){
        throw new Error(`Unable to find that address`);
      }
      else{
        const lng = response.data.results[0].geometry.location.lng;
        const lag = response.data.results[0].geometry.location.lat;
        console.log(response.data.results[0].formatted_address);
        // console.log(lng);
        // console.log(lag);
        // console.log(response.data.results[0].geometry.location.lat);
        // console.log(response.data.results[0].geometry.location.lng);
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
        }
        //sent get request to darksky
        // return axios,get()
      })

      .catch((error)=>{
      //Rejected from axios call to google api
        if(error.code ===`ENOTFOUND`){
          console.log(`unable to connect this url to google`);
        }
      //we throw an error because that address does not exists
        else if(error.message){
          console.log(error);
          console.log(`CAUGHT ERROR!`);
          console.log(error.message);
        }
        else{
          console.log(error);
      }
    })
