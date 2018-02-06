const yargs = require(`yargs`);
const axios = require(`axios`);
const geocode = require(`./geocode/geopromise.js`);
const geoweather =require(`./weather/geoweather.js`)
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
  // const encodedAddress = encodeURIComponent(argv.address);
  // const key = "AIzaSyCVSOKY3vqiKKtcYaFL5F9cRcHslWZCbTI";
  // const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;


  geocode.geocodeAddress(argv.a,(results,errorMessage)=>{
    console.log(results.address);
    if (errorMessage) {
      console.log(errorMessage);
     }
    else{
      geoweather.geoweather(results.lag,results.lng,(errorMessage) =>{

        // console.log(`The temperature is ${results.temperature} degrees, but it feels like ${results.apperntTemperature} degrees`);
        // console.log("Error: ",error);
        // console.log("body: ",JSON.stringify(body,undefined,2));
      });
     // console.log("hi");
//      geoweather.weatherResults(results.lagitude,results.longitude,(errorMessage) =>{
//        // console.log(`The temperature is ${results.temperature} degrees, but it feels like ${results.apperntTemperature} degrees`);
//        // console.log("Error: ",error);
//        // console.log("body: ",JSON.stringify(body,undefined,2));

//
    // console.log(results.address);
     }
  });
    // geoweather.geoweather(26.3484303,-80.0860831,(errorMessage,results)=>{

    // });

  // geocode.geocodeAddress(argv.a,(errorMessage,results) => {
  //   // console.log(results.lng);
  //   //if errormessage is undefined then it treated it as false
  //   //if it is definded, then it treated it as true
  //   // console.log(results.lag);
  //   console.log();
  //   if (errorMessage) {
  //     console.log(errorMessage);
  //   }else{
  //     geoweather.geoweather(results.lag,results.lng,(errorMessage,results)=>{
  //
  //     });
  //     console.log("hi");
  //   }
  //
  //     //   //sent get request to darksky
  //     //   // return axios,get()
  //      })



       // .catch((errorMessage)=>{
       // //Rejected from axios call to google api
       //   if(errorMessage.code ===`ENOTFOUND`){
       //     console.log(`unable to connect this url to google`);
       //   }
       // //we throw an error because that address does not exists
       //   else if(errorMessage.message){
       //     // console.log(error);
       //     console.log(`CAUGHT ERROR!`);
       //     console.log(errorMessage.message);
       //   }
       //   else{
       //     console.log(error);
       //   }
       // })
